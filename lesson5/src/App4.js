import {useState} from 'react'
const App4 = () => {
    const[a,b] = useState("red")
    const reW = () => {
        if (a === "red") {
            b("green");
        } if (a === "green") {
            b("yellow");
        } if (a === "yellow") {
            b("red");
        }
    };
    return (
        <div>
      <button onClick={reW}> Next</button>
      <div>
        <div className={a === "red" ? "red" : ""}>Red</div>
        <div className={a === "yellow" ? "yellow" : ""}>Yellow</div>
        <div className={a === "green" ? "green" : ""}>Green</div>
      </div>
    </div>
    );
}
export default App4;