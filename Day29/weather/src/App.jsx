import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/weather";
import ToggleTheme from "./components/theme";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.themeReducer)
  console.log(theme)
    return (
      <div className={theme ? "App dark" : "App"}>
        <ToggleTheme />
        <Form />
        <Weather />
      </div>
      );
    
}
export default App;