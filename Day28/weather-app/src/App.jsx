import {useState} from 'react';
import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
// import Template from './components/box';

function App(props) {
    const [weather , setWeather] = useState("")
    const [input , setInput] = useState("")
    const updatePlace = () => {      
        fetch(`https://api.weatherapi.com/v1/current.json?key=bd5c2854c07e49b685b213459210208&q=${input}`)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data)
            console.log(data.location)
        })
    }
    // const time=weather.location.localtime
    // const Ctime=time.substring(10)
    return (
        <div className="App">
                <div className="head">
                    <input  value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            placeholder="Enter City Name"
                    ></input>
                    <button className="btn"
                            onClick={updatePlace}
                            >Enter</button>
                </div>
                <div >
                    {
                        weather.location ?
                        <div>
                                <div className="card">
                    <div className="time">{weather.location.localtime.substring(10)}</div>
                    <div className="name">{weather.location.name}</div>
                    <div className="image">
                        <img src={weather.current.condition.icon} alt="weather"/>
                    </div>
                    <div className="temp">{weather.current.temp_c} C</div>
                    <div className="text">{weather.current.condition.text}</div>
                    <div className="footer">
                    <div >
                        <ul className="quantity bold">
                            <li>Wind Now</li>
                            <li>Precipitation</li>
                            <li>Humidity</li>
                        </ul>
                    </div>
                    <div >
                        <ul className="quantity">
                            <li >{weather.current.wind_kph} km</li>
                            <li>{weather.current.precip_mm} %</li>
                            <li>{weather.current.humidity} %</li>     
                        </ul>
                    </div>
                    </div>
                    </div>
                        </div> : <div className="shadow">Place not found</div>
                    }
                </div>
            
        </div>
    )
}
export default App;