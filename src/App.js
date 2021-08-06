import React from "react";
import "./App.css";

const App = () => {
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon">
            <h2>Countdown Timer</h2>
            <p>
              Countdown to a really special date. One you could or would never
              imagine!
            </p>
          </span>
        </div>
      </section>
    </section>
  );
};

export default App;
