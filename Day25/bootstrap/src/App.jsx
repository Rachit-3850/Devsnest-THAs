import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbars from "./components/Navbar";

function App() {
    return (
      <div className="App">
        <h1>Using Bootstrap</h1>
        <Navbars />
        <div className="card">
        <Cards />
        </div>
      </div>
      );
    
}
export default App;