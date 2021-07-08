import White from "./components/white";
import Black from "./components/black";
import "./style.css"

function App() {
    return (
    <div className="App">
        <div className="design">
        <div className="container">
        <White />
        <Black />
        <White />
        <Black />
        <White />
        <Black />
        <White />
        <Black />
        </div>
        </div>
    </div>
    );
}
export default App;