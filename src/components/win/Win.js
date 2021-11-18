import React from "react";
import "./Wind.css";
export default function Win({ setCounter }) {
  return (
    <div className="win">
      <h1>You Win!</h1>
      <button
        className="btn"
        onClick={() => {
          setCounter(1);
        }}
      >
        Play Again
      </button>
    </div>
  );
}
