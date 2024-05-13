import React from "react";
import { useState } from "react";

function App() {
  setInterval(showTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [time2, setTime] = useState(time);
  function showTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time2}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
