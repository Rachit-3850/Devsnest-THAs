import {useDispatch , useSelector } from "react-redux"
import { tooggleTheme } from "../actions"
const ToggleTheme = () => {
    const theme =useSelector((state) => state.themeReducer)
    const dispatch =useDispatch()
    return <div className="toggle">
        <button className={theme ? "btn btn-light" : "btn btn-dark"}
            onClick={() => {
                dispatch(tooggleTheme())
            }
            }
            >{theme ? "dark" : "light"}</button>
    </div>
}
export default ToggleTheme