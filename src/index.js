import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
// import ContactUs from './components/pages/ContactUs';
// import CropPrediction from './components/pages/CropPrediction';
import SeedsInformation from './components/pages/SeedsInformation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    {/* <Weather/> */}
    {/* <SeedsInformation/> */}
  </div>
);
