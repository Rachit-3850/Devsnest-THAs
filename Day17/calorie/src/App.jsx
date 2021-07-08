
import React from "react";
import ReactDOM from "react-dom";
import Black from "./components/black";
import "./style.css"
// const title = "Page tilte"
// const para = "page"
function App(props) {
    let a=10;
    let b=20;
    return (
    <div className="App">
        <div className="components">
            <Black calorie="56" title="Pizza" />
            <Black calorie="69" title="Burger" />
            <Black calorie="500" title="Coke" />
            <Black calorie="180" title="Browne" />
            <Black calorie="90" title="Fried Rice" />
            <Black calorie="200" title="Lassania" />
            <Black calorie="10" title="Pani Puri" />
        </div>
        
    </div>
    );
}
export default App;