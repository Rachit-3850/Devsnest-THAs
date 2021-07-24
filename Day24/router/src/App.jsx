import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import DashBoard from "./components/dashBoard";
import Profile from "./components/profile";
import Home from "./components/home";
import {UserProvider} from "./context"
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
    return (
      <UserProvider>
        <div className="App">
          <Router>
            <NavBar />
            <div className="home">
            <Route exact path='/' component={Home} />
            <Route  path='/about' component={About} />
            <Route  path='/profile' component={Profile} />
            <Route  path='/dashboard' component={DashBoard} />
            </div>
          </Router>
        </div>
      </UserProvider>
      );
    
}
export default App;