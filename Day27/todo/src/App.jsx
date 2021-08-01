import React from "react";
import "./App.css";
import Input from "./components/input";
import Data from "./components/data";
function App() {
    return (
      <div className='App'>
        <h1>Todo List</h1>
        <Input />
        <br></br>
        <Data />
      </div>
      );
    
}
export default App;