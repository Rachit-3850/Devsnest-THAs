import React, { useState, useEffect } from "react";
import "./App.css";
import {useCars} from "./components/Cars"
function App() {
    const car = useCars();
    return (
        <div className="App">
          <h1>{car.display()}</h1>
          <div className="btn">
          <button onClick={car.prev}>Prev</button>
          <button onClick={car.next}>Next</button>
          </div>
        </div>
      );
    
}
export default App;