import React from "react";

function Display({ start,stop, hours, seconds, minutes, reset, flag }) {
  return (
    <div className="container">
      <div className="sub-container">
        <span>{hours}</span> &nbsp;:&nbsp;
        <span>{minutes}</span>&nbsp;:&nbsp;
        <span>{seconds}</span>
      </div>

      <div className="btn-container">
        {flag && <button onClick={start} className="stopwatch-btn stopwatch-btn-gre">
          {" "}
          Start
        </button>}
        {!flag && <button onClick={stop} className="stopwatch-btn stopwatch-btn-red"> Stop</button>}
        {!flag && <button onClick={reset} className=" stopwatch-btn stopwatch-btn-yel"> Reset</button>}
      </div>
    </div>
  );
}

export default Display;
