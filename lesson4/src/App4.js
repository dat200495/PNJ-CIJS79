import { useState } from "react";

const App4 = () => {
  const [currentColor, setCurrentColor] = useState("red");

  const changeColor = () => {
    if (currentColor === "red") {
        setCurrentColor("green")
    } else if (currentColor === "green") {
        setCurrentColor("yellow")
    } else if (currentColor === "yellow") {
        setCurrentColor("red")
    }
  };
  return (
    <div>
      <button onClick={changeColor}> Next</button>
      <div>
        <div className={currentColor === "red" ? "red" : ""}>Red</div>
        <div className={currentColor === "yellow" ? "yellow" : ""}>Yellow</div>
        <div className={currentColor === "green" ? "green" : ""}>Green</div>
      </div>
    </div>
  );
};
export default App4;