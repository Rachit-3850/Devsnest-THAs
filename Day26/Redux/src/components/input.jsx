import { updateEmail, updateName } from "../actions"
import store from '../store'
import { useDispatch , useSelector } from "react-redux"
const  Input = () => {
    const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Input</h1>
            <input type="text" value={state.name} placeholder="name" id="username" onChange={(e) => dispatch(updateName(e.target.value))} />
            <input type="text" value={state.email} placeholder="email" id="useremail" onChange={(e) => dispatch(updateEmail(e.target.value))}/>
        </div>
    )
}
export default Input