import {useState,useEffect} from 'react';
const Todo = ({name,calorie,index,Delete,handleEdit}) => {
    const [edit,setEdit] = useState(false);
    const [fill,setFill] =useState({item: name, calorie: calorie})
    return(
    
        <div className="container">
            {
                (!edit)
                ?
            
            (
            <div className="elements">
                <div className='heading'>{name}</div>
                <div className="discription">You have consumed {calorie} calories</div>
                <div className="buttons">
                        <button 
                            className="delete" 
                            onClick={() => Delete(index)} >Delete
                        </button>
                        <button 
                            className="edit"
                            onClick={() =>setEdit(edit => !edit)}
                            >Edit</button>
                </div>
            </div>
            )
            : 
            (
                <div className="elements">
                    <input
                    type='text'
                    className='reinput'
                    onChange={(e) => setFill({...fill,item: e.target.value})}
                    value={fill.item} 
                />
                <input
                    type='text'
                    className='reinput'
                    onChange={(e) => setFill({...fill,calorie: e.target.value})} 
                    value={fill.calorie} 
                />
                {console.log(fill.item)}
                {console.log(fill.calorie)}
                <div className="buttons">
                        <button 
                            className="delete" 
                            onClick={() => Delete(index)} >Delete
                        </button>
                        <button 
                            className="edit"
                            onClick={() => {
                                handleEdit(index, fill.item, fill.calorie);
                                setEdit(false);
                            }}
                            >Done</button>
                </div>
                </div>
            )
            // <h1>nikal</h1>
            }
        </div>
    )
}
export default Todo;