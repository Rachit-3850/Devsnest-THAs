import {useState} from 'react';
const Box =() => {
    let [count , setCount] = useState(0);
    return (
        <div className="box" onClick={()=> setCount(count+1) } >
            <div>{count}</div>
        </div>
    )
}
export default Box;