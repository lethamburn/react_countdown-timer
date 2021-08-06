import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  var interval = useRef();

  const startTuner = () => {
    const countdownDate = new Date("May 30, 2020 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance / (1000 * 60 * 60 * 24));
      const minutes = Math.floor(distance / (1000 * 60 * 60 * 24));
      const seconds = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    }, 1000);
  };

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>
            Countdown to a really special date. One you could or would never
            imagine!
          </p>
        </div>
        <div>
          <section>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default App;
