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
        <button className={a === "red" ? "red" : ""}></button>
        <button className={a === "yellow" ? "yellow" : ""}></button>
        <button className={a === "green" ? "green" : ""}></button>
      </div>
    </div>
    );
}
export default App4;