import { useDispatch , useSelector } from "react-redux"
import { updateCity , weatherData } from "../actions"
const Form = () => {
    const citystate = useSelector((state) => state.cityReducer)
    const dispatch = useDispatch();
    return (
        <div className="Form">
            <div className="head">
                    <input  value = {citystate}
                            onChange={(e) => {
                                dispatch(updateCity(e.target.value))
                            }}
                            placeholder="Enter City Name"
                    ></input>
                    <button className="bttn"
                            onClick={() => {
                                dispatch(weatherData(citystate))
                            }
                            }
                            >Enter</button>
                            
            </div>
        </div>
    )
}
export default Form