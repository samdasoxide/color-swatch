import React from 'react';

export default function ColorItem(props) {
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    const formatter = (colorAttributes) => {

      const formatters = {
        hsl: hslFormatter(colorAttributes),
        rgb: rgbFormatter(colorAttributes),
        brgb: brgbFormatter(colorAttributes),
      }

      setColor(formatters[colorAttributes.type])
    }
    formatter(props.value);
  }, [props.value]);

  const rgbFormatter = (color) => {
    return `rgb(${color.red},${color.green},${color.blue})`
  }

  const hslFormatter = (color) => {
    return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
  }

  const brgbFormatter = (color) => {
    return `brgb(${color.value})`
  }

  return(
    <div className="row border p-4 m-2" style={{ backgroundColor: color }}>
      <div className="col-sm">
        <p><strong>The color is:</strong> {color}</p>
      </div>
      <div className="col-sm">
        <p>
          <strong>full info: </strong>
          {JSON.stringify(props.value).replace(/[{}""]/g, '').replace(/[,]/g, ', ') }
        </p>
      </div>
    </div>
  );
}
