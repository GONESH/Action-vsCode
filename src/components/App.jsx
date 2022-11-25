import React from "react";

import { useState } from "react";
// import {QueryCliient,QueryClientProvider } from 'react-query'

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
       setCounter(-200)
    // setCounter(function (oldCounterValue) {
    //   // return 200
    //   // return oldCounterValue+1
    // //   setCounter((oldCounterValue) => oldCounterValue + 1);
    // });
  }
  function decrease() {
    //    setCounter(counter-1)
    // setCounter((oldCounterValue) => oldCounterValue - 1);
  }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increase()}>Increase</button>
      <button onClick={decrease()}>Decrease</button>
    </div>
  );
}

export default App;
