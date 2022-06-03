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
      <img1 className="bg-image" src={img1}></img1>
      <img className="bg-image" src={img}></img>
      
    </>
  );
}