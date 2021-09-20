import React from 'react';
import axios from 'axios';
import Header from './components/header';
import ColorItem from './components/color-item';


export default function App() {
  const [swatches, setSwatch] = React.useState([]);
  React.useEffect(() => {
    getSwatch();
  }, []);

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

  return (
    <React.Fragment>
      <Header/>
      <div className="container p-5">
        <h4 className="mb-4">Hit the refresh button generate a random color pallette</h4>
        {swatches.map((swatch, index) => (
            <ColorItem key={index} value={swatch}/>
        ))}

        <button
          type="button"
          className="btn btn-info mt-3"
          onClick={() => getSwatch()}>
          Refresh
        </button>
      </div>
  </React.Fragment>
  );
}

