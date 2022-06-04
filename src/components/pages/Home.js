import React from 'react';
// import '../../App.css';
import img from '../../images/img-1.jpg';
import img1 from '../../images/ppic.jpg';
import './Home.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Weather from './Weather';
// import { render } from '@testing-library/react';
export default function Home() {
  return (
    <>
      <h1 className='bg-text1'>Welcome to AgriLearn</h1>
      <h1 className='bg-text2'>A Sustainable Agriculture does not deplete soils or people</h1>
      {/* <img1 className="bg-image" src={img1}></img1> */}
      <img className="bg-image" src={img}></img>
      <br/><br/><br/><br/>
      <hr />
      <div style={{backgroundColor:"green"}}></div>
      <hr/>
      <div style={{paddingLeft:60}}>
        <h1 style={{color:'green',fontSize:25}}>About The Website :</h1>
        <p style={{color:'green',fontSize:25}}>Our website Aim :</p>
        <ul>
          <li>
            <p>The language barrier remover</p>
          </li>
          <li>
            <p>Correct crop Prediction</p>
          </li>
        </ul>
        <p style={{color:'green',fontSize:25}}>Sections Provided are :</p>
        <ul>
          <li>
            <p><strong>In Services meue :</strong>  Know about the crop Prediction where you have to fill a small form and on submit you will recive a popup message telling which types of crops to be grown </p>
            <p><strong> In Seeds Information :</strong> you will get Information of a Agriculture:Subsidies, Seeds, Fertilizers and Related Issues</p>
          </li>
          <li>
            <p style={{color:'green',fontSize:25}}>In Technologies section :</p>
            <p> 1. Hydroponic Farming related Infomation</p>
            <p> 2. Aquaponics Farming related Infomation</p>
            <p> 3. Organic Farming related Information</p>
            <p> 4. Inorganic Farming related Information</p>
          </li>
          <li>
            <p><strong>In Contact Us</strong> You can ask your Query and even if any feature is to be implemented for future use </p>
          </li>
          <li>
            <p><strong>In Weather</strong> you will get information related to your location you jst need to enter location name</p>
          </li>
        </ul>
      </div>
      <hr/>
      <hr/>
      <footer style={{backgroundColor:"lightgray"}}>
      <div style={{color:"black",boxSizing:"border-box",textAlign:"center"}}>
        <p style={{paddingBottom:20}}>Website Is Created by :&#169; AgriLearn</p>
        
      </div>
      <br/><br/>
      </footer>
    </>
  );
}