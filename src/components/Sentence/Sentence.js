import React from "react";
import { scrambler } from "../../helpers/scrambler";
import "./Sentence.css";
export default function Sentence({ sentence }) {
  return (
    <div className="container">
      <div className="scrambled">
        {sentence.split(" ").map((word, index) => (
          <span key={index}> {scrambler(word)} </span>
        ))}
      </div>
      <div className="instruction">
        <p>Guess the sentence ! Starting typing</p>
        <p>The yellow blocks are meant for spaces</p>
      </div>
      {console.log("render")}
    </div>
  );
}
