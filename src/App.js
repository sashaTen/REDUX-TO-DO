import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [desiredNumber, setDesiredNumber] = useState(3);
  const createNumber = (e) => {
    e.preventDefault();

    setDesiredNumber(parseInt(e.target.value));
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </h2>
      <h2
        onClick={() => {
          setCount(count - 1);
        }}
      >
        +
      </h2>
      <h2
        onClick={() => {
          setCount(count + desiredNumber);
        }}
      >
        + number : {desiredNumber}
      </h2>
      <input onChange={createNumber} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
