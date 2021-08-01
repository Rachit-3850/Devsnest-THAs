import { useDispatch ,useSelector } from "react-redux"
import { deleteItem } from "../actions"
const  Data = () => {
    const todos = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    return (
        <div className='list'>
            {todos.map((val,idx) => (
                <div>
                    <div className="inline">
                    <div className="content">{val.title}</div>
                    <button className="delete"
                            onClick={() => dispatch(deleteItem(idx))}
                            >Delete</button>
                    </div>
                    <div className="line"></div>           
                </div>
            ))}
        </div>
    )
}
export default Data