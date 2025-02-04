import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 100 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Stopwatch</h1>
        <h2>Time:{formatTime(time)}</h2>
        {!isRunning && <button onClick={handleStart} disabled={isRunning}>Start</button>}
        {isRunning && <button onClick={handleStop} disabled={!isRunning}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
