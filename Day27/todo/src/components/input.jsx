import {updateAdd , deleteItem } from "../actions"
import store from '../store'
import { useDispatch , useSelector } from "react-redux"
import { useState } from "react";
const  Input = () => {
    const [input ,setInput] = useState("");
    // const state = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    return (
        <div className="input">
            <input type="text"
            value={input}
            placeholder="Item"
            id="Input"
            onChange={(e) => {
                setInput(e.target.value)
            }}
            />
            <button className="btn"
                    onClick={() => {
                        dispatch(updateAdd({
                            title: input,
                            done: false,
                        }))
                        setInput("")
                    }}>
                Add
            </button>
        </div>
    )
}
export default Input