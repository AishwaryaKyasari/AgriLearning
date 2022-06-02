import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ContactUs from './pages/ContactUs';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2,setDropdown2]=useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = ()=>{
    if(window.innerWidth<960){
      setDropdown2(false);
    }else{
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () =>{
    if(window.innerWidth<960){
      setDropdown2(false);
    }
    else{
      setDropdown2(false);
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          AgriLearn
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li 
          className='nav-item'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}>
            <Link
              to='/Methodlogies'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Methodlogies <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Weather'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div id = "google_element"></div>
      </nav>
    </>
  );
}

export default Navbar;