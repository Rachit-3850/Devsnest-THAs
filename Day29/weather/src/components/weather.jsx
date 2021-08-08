import store from "../store"
import {  useSelector } from "react-redux"
import { updateCity , weatherData } from "../actions"
const Weather = (cityname) => {
    // const citystate = useselector((state) => state.cityReducer)
    const weather = useSelector((state) => state.dataReducer)
    const theme =useSelector((state) => state.themeReducer)
    return (
        <div>
            <div >
                    {
                        weather.location ?
                        <div>
                                <div className={theme ? "card darkish" : "card"}>
                    <div className="time">{weather.location.localtime.substring(10)}</div>
                    <div className="name">{weather.location.name}</div>
                    <div className="image">
                        <img src={weather.current.condition.icon} alt="weather"/>
                    </div>
                    <div className="temp">{weather.current.temp_c} C</div>
                    <div className="text">{weather.current.condition.text}</div>
                    <div className="zz">
                    <div className="zzz bold">
                        <div className="ff">Wind Now</div>
                        <div className="ff">Precipitation</div>
                        <div className="ff">Humidity</div>
                    </div>
                    <div className="zzz" >         
                        <li >{weather.current.wind_kph} km</li>
                        <li>{weather.current.precip_mm} %</li>
                        <li>{weather.current.humidity} %</li>        
                    </div>
                    </div>
                    </div>
                        </div> : <div className={theme ? "shadow darkish" : "shadow"}>Place not found</div>
                    }
                </div>
        </div>
    )
}
export default Weather