import { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import ToggleMode from "./Components/ToggleMode";

function App() {
  const [dark, setdark] = useState(true);
  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [hours, sethours] = useState(0);
  const [interv, setInterv] = useState();
  const [flag, setflag] = useState(true);

  function handleStart() {
    setInterv(
      setInterval(
        () => setseconds((prevSeconds) => prevSeconds + 1), // Use the function form of setState to access the previous state
        1000
      )
    );

    if (seconds >= 60) {
      setseconds(0);
      setminutes((prevMinutes) => prevMinutes + 1); // Use the function form of setState
    }

    if (minutes >= 60) {
      sethours((prevHours) => prevHours + 1); // Use the function form of setState
      setminutes(0);
    }
    setflag(false);
  }

  function handleReset() {
    clearInterval(interv);
    sethours(0);
    setminutes(0);
    setseconds(0); // Corrected from sethours(0)
    setflag(true);
  }

  function handleStop() {
    clearInterval(interv);
  }

  // Add a condition to stop the interval when needed

  return (
    <>
      <ToggleMode />
      <Display
        flag={flag}
        reset={handleReset}
        stop={handleStop}
        start={handleStart}
        seconds={seconds}
        hours={hours}
        minutes={minutes}
      />
    </>
  );
}

export default App;
