import React from 'react';
import { useEffect,useState } from 'react';
import countries from 'i18n-iso-countries';
import './Weather.css'

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
function Weather() {
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('');
    const [state, setState] = useState({});
    const apiKey = 'bdc5921af230623e3961d82c7ed35f8c'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {setApiData(data);console.log("api data :    ",data);});
          
      }, [apiUrl]);
      const inputHandler = (event) => {

        setGetState(event.target.value);
      };
      
      const submitHandler = () => {
        setState(getState);
      };
      
      const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
      };
      return (
        <div className="App">
          <header className="d-flex justify-content-center align-items-center">
            <h2 style={{textAlign:"center",color:"red"}}>Weather Details</h2>
          </header>
          <div className="container">
            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
              <div class="col-auto">
                <label for="location-name" class="col-form-label">
                  Enter Your Location :
                </label>
              </div>
              <div class="col-auto">
                <input
                  name="weather"
                  type="text"
                  id="location-name"
                  class="form-control"
                  onChange={inputHandler}
                  value={getState}
                />
              </div>
              <button className="btn btn-primary mt-2" onClick={submitHandler}>
                Search
              </button>
            </div>
      
            <div className="card mt-3 mx-auto" style={{ width: '45vw' }}>
              {apiData.main ? (
                <div class="card-body text-center">
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                  />
      
                  <p className="h2">
                    {kelvinToFarenheit(apiData.main.temp)}&deg; C
                  </p>
      
                  <p className="h5">
                    <i className="fas fa-map-marker-alt"></i>{' '}
                    <strong>{apiData.name}</strong>
                  </p>
      
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>
                        <i class="fas fa-temperature-low "></i>{' '}
                        <strong>
                          {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                        </strong>
                      </p>
                      <p>
                        <i className="fas fa-temperature-high"></i>{' '}
                        <strong>
                          {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {' '}
                        <strong>{apiData.weather[0].main}</strong>
                      </p>
                      <p>
                        <strong>
                          {' '}
                          {countries.getName(apiData.sys.country, 'en', {
                            select: 'official',
                          })}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <h1></h1>
              )}
            </div>
          </div>
          {/* <footer className="footer">
            <code>
              Created by{' '}
              <a href="https://github.com/imshines" target="none">
                imshines
              </a>{' '}
              using React
            </code>
          </footer> */}
        </div>
      );
  }

  export default Weather;