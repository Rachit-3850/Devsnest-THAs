import React from "react"
const Black =(props) => {
    const {calorie,title,index,Delete} = props;
    console.log(calorie);
    return (
    <div className="card">
        <div className="head">
            <div className="heading">{title}</div>
            <button className="btn" onClick={() => Delete(index)}>Delete</button>
        </div>
        <div className="para">you have consumed {calorie} cals today</div>
    </div>
    )
}
export default Black;