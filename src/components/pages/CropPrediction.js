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
    exportToJsonFile(newRecord);

  }

  function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = './data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
  return (
    <>
      <h1 className='cropprediction' style={{color: "red"}}>Crop Prediction</h1>
      <form action="" onSubmit={handleSubmit} className="form">
      <div className='space'>
        <label htmlFor="N" className='border'>Nitrogen(N) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.N}
        onChange={handleInput}
        name="N" id="N"/>
      </div>
      <div className='space'>
        <label htmlFor="P" className='border'>Phosphorus(P) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.P}
        onChange={handleInput}
        name="P" id="P"/>
      </div>
      <div className='space'>
        <label htmlFor="K" className='border'>Potassium(K) :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.K}
        onChange={handleInput}
        name="K" id="K"/>
      </div>
      <div className='space'>
        <label htmlFor="Temp" className='border'>Temprature  :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.Temp}
        onChange={handleInput}
        name="Temp" id="Temp"/>
      </div>
      <div className='space'>
        <label htmlFor="Humid" className='border'>Humidity  :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.Humid}
        onChange={handleInput}
        name="Humid" id="Humid"/>
      </div>
      <div className='space'>
        <label htmlFor="PH" className='border'>PH value :</label>
        <input type="number" autoComplete="off" 
        value={soilDetails.PH}
        onChange={handleInput}
        name="PH" id="PH"/>
      </div>
      <div className='space'>
        <label htmlFor="Rain" className='border'>Rainfall  :</label>
        <input type="number" autoComplete="off"  
        value={soilDetails.Rain}
        onChange={handleInput}
        name="Rain" id="Rain"/>
      </div>
      <button type='Submit' className='button'>Submit</button>
      </form>
    </>
  );
}