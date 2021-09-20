import React from 'react';
import axios from 'axios';
import Header from './components/header';
import ColorItem from './components/color-item';


export default function App() {
  const [swatches, setSwatch] = React.useState([]);
  React.useEffect(() => {
    const getSwatch = async () => {
      try {
        const url = "http://127.0.0.1:8000/color-swatch";
        let response = await axios(url);
        setSwatch(response.data)
      } catch (error) {
        console.log('error');
        throw error;
      }
    };
    getSwatch();
  }, []);

  return (
    <React.Fragment>
      <Header/>
      <div className="container p-5">
        <h3 className="mb-4">Refresh page to generate a random color swatch of 5 colors</h3>
        {swatches.map((swatch, index) => (
            <ColorItem key={index} value={swatch}/>
        ))}
      </div>
  </React.Fragment>
  );
}

