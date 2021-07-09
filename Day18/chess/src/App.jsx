
import Black from "./components/black";
import "./style.css"
let arr=[];
function array() {
    for(let i=1;i<=64;i++)
    {
        arr[i-1]=i;
    }
}
array();
console.log(arr);
function App(props) {
    return (
    <div className="App">
        <div className="design">
        <div className="container">
            {
                arr.map((item) => <Black title={item} />)
            }
        </div>
        </div>
    </div>
    );
}
export default App;