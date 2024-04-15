import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let flag = useRef(0)

  const CountIncrease = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  const CountDecrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };

  count==0?flag.current=0:false || count==10?flag.current=1:false
 

  flag.current == 0 ? CountIncrease() : CountDecrease();

  return (
    <>
      <h1>{flag.current==0?'currently increasing ':'currently decreasing '}<br/>count:{count}</h1>
    </>
  );
}

export default App;
