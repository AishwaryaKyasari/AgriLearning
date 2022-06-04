import React,{useState} from 'react';
import './CropPrediction.css'
export default function CropPrediction() {
  
  const [soilDetails,setsoilDetails]=useState({
    N:"",
    P:"",K:"",Temp:"",Humid:"",PH:"",Rain:""
  }
  );
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setsoilDetails({...soilDetails,[name]:value  });
    // setsoilDetails({...soilDetails, P:"65"})
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newRecord={...soilDetails}//all the above data is stored in newRecord
    console.log(newRecord);
    setsoilDetails({N:"",P:"",K:"",Temp:"",Humid:"",PH:"",Rain:""})
    console.log(newRecord);
    var data = new FormData()
    data.append("t",newRecord.Temp);
    data.append("h",newRecord.Humid);
    data.append("p",newRecord.PH);
    data.append("r",newRecord.Rain);

    fetch("http://127.0.0.1:5000/crops",{
      method:"POST",
      body:data
    }).then((result)=>{result.text().then((data)=>{alert(data)})})
  }

  
  return (
    <>
      <h1 className='cropprediction' style={{color:"darkgreen", fontSize: 40}}>Crop Prediction</h1>
      <form action="" onSubmit={handleSubmit} className="form">
      <div className='space'>
        <label htmlFor="N" className='border'>Nitrogen(N) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.N}
        onChange={handleInput}
        placeholder="0-140"
        name="N" id="N"/>
      </div>
      <div className='space'>
        <label htmlFor="P" className='border'>Phosphorus(P) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.P}
        onChange={handleInput}
        placeholder="5-145"
        name="P" id="P"/>
      </div>
      <div className='space'>
        <label htmlFor="K" className='border'>Potassium(K) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.K}
        onChange={handleInput}
        placeholder="5-205"
        name="K" id="K"/>
      </div>
      <div className='space'>
        <label htmlFor="Temp" className='border'>Temprature  :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.Temp}
        placeholder="8.8256-43.6754"
        onChange={handleInput}
        name="Temp" id="Temp"/>
      </div>
      <div className='space'>
        <label htmlFor="Humid" className='border'>Humidity  :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.Humid}
        onChange={handleInput}
        placeholder="14.2580-99.9818"
        name="Humid" id="Humid"/>
      </div>
      <div className='space'>
        <label htmlFor="PH" className='border'>PH value :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.PH}
        onChange={handleInput}
        placeholder="3.5047-9.9350"
        name="PH" id="PH"/>
      </div>
      <div className='space'>
        <label htmlFor="Rain" className='border'>Rainfall  :</label>
        <input type="number" autoComplete="off"  
        value={soilDetails.Rain}
        onChange={handleInput}
        placeholder="20.2112-298.5601"
        name="Rain" id="Rain"/>
      </div>
      <button type='Submit' className='button'>Submit</button>
      </form>
    </>
  );
}