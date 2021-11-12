import React from "react";
import { scrumbler } from "../../helpers/scrumbler";
import "./Sentence.css";
export default function Sentence({ sentence }) {
  return (
    <div className="container">
      <div className="scrambled">
        {sentence.split(" ").map((word, index) => (
          <span key={index}> {scrumbler(word)} </span>
        ))}
      </div>
      <div className="instruction">
        <p>Guess the sentence ! Starting typing</p>
        <p>The yellow blocks are meant for spaces</p>
      </div>
    </div>
  );
}
