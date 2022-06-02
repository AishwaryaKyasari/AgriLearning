import React,{useState} from 'react';
// import '../../App.css';
import './ContactUs.css'
import img from '../../images/pic.jpg'
export default function ContactUs() {
  const [contactus,setcontactus]=useState({
    email:"",
    pno:"",
    query:""
  }
  );
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setcontactus({...contactus,[name]:value  });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newRecord={...contactus}//all the above data is stored in newRecord
    console.log(newRecord);
    setcontactus({email:"",pno:"",query:""})
    console.log(newRecord);
  }
  return (
  <>
  <h1 style={{color: "red"}} className='contactus'>CONTACT US</h1>
  <form onSubmit={handleSubmit} className="form">
    <div className='space'>
    <label htmlFor="email" className='border'>Enter your email:</label>
        <input type="email" autoComplete="off"
        value={contactus.email}
        onChange={handleInput}
        name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
    </div>
    <div className='space'>
    <label htmlFor="pno" className='pno'>Enter your Phone number :</label>
        <input type="tel" autoComplete="off"
        value={contactus.pno}
        onChange={handleInput}
        name="pno" id="pno" pattern="[+]{1}[0-9]{11,14}" required/>
    </div>
    <div className='space'>
    <label htmlFor="query" className='query'>Enter query :</label>
        {/* <input type="text" autoComplete="off"
        value={contactus.query}
        onChange={handleInput}
        name="query" id="query"/> */}
        <textarea autoComplete="off" value={contactus.query} onChange={handleInput} name="query" id="query"></textarea>
    </div>
    <button type='Submit' className='button'>Submit</button>
  </form>
  <img className="bg-image" src={img}></img>
  </>
  );  
}