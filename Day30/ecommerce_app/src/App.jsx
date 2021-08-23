import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbars from "./components/navbar";
import Cards from "./components/card";
function App() {
    return (
      <div className="App">
        <Navbars />
        <Cards />
      </div>
      );
    
}
export default App;