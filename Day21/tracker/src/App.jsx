import {useState,useEffect} from 'react';
import React from 'react';
import Todo from "./components/box";
import "./style.css"

function App(props) {
    const [todos , setTodos] = useState([]);
    const [input,setInput] = useState({item: '', calorie:''});

    const Delete = index => {
        const newData = todos.filter((val,idx) => idx!==index);
        setTodos(newData);
    }

    const validate = (item, calorie) => {
		if (!item || !calorie) return false;
		if (calorie < 0) return false;
		return true;
	};

	const handleEdit = (index, item, calorie) => {
        const newEdit=todos.map((val,idx) => (
            index === idx ? {item,calorie} : val
        ))
        setTodos(newEdit);
	};

    return (
    <div className="App">
        <div className="design">
            <div className="head">
                <input
                    type='text'
                    placeholder='Item name'
                    onChange={(e) => setInput({...input,item: e.target.value})}
                    value={input.item} 
                />
                <input
                    type='text'
                    placeholder='Calorie amount'
                    onChange={(e) => setInput({...input,calorie: e.target.value})} 
                    value={input.calorie} 
                />
                {console.log(input.item)}
                {console.log(input.calorie)}
                <button 
                className="btn" 
                onClick={() =>{
                    if(!validate(input.item,input.calorie)) return ;
                    setTodos([...todos,{item: input.item , calorie: input.calorie}]);
                    setInput({item: "", calorie: ""});
                }       
                }>Add Item</button>
            </div>
        {
            todos.map((todo,idx) => (
            <Todo key={idx}
                name={todo.item}
                calorie={todo.calorie}
                index={idx}
                Delete={Delete} 
                handleEdit={handleEdit}
            /> 
            ))
        }
        </div>
    </div>
    );
}
export default App;