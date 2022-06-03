import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './components/pages/Services';
import Methodlogies from './components/pages/Methodlogies';
import ContactUs from './components/pages/ContactUs';
import Translator from './components/Translator';

// import SignUp from './components/pages/SignUp';
// import Marketing from './components/pages/Marketing';
//import Consulting from './components/pages/SeedsInformation';
import CropPrediction from './components/pages/CropPrediction';
import Weather from './components/pages/Weather';
import SeedsInformation from './components/pages/SeedsInformation';
// import Hydroponics from './components/pages/Hydroponics';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/Services' element={<Services/>} />
        <Route exact path='/Methodlogies' element={<Methodlogies/>} />
        <Route exact path='/Weather' element={<Weather/>} />
        <Route exact path='/ContactUs' element={<ContactUs/>}/>
        <Route exact path='/CropPrediction' element={<CropPrediction/>} />
        <Route exact path='/Translator' element={<Translator/>} />
        <Route exact path='/SeedsInformation'element={<SeedsInformation/>}/>
        {/* <Route exact path='/Hydroponics' element={<Hydroponics/>}/> */}
        {/* <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />*/}
      </Routes>
    </Router>
  );
}

export default App;