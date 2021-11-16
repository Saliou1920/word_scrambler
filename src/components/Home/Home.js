import React, { useState } from "react";
import useKeyPress from "../../utils/useKeyPress";
import Sentence from "../Sentence/Sentence";
import "./Home.css";
export default function Home({ sentence }) {
  const [keydown, setKeydown] = useState();
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentenceArray, setSentenceArray] = useState(sentence.split(" "));

  function Texte() {
    return (
      <div className="texte">
        {sentence.split(" ").map((word, wIndex) => {
          return (
            <div className="texte-1">
              {word.split("").map((letter, lIndex) => {
                return (
                  <input
                    type="text"
                    value={wIndex}
                    maxLength="2"
                    key={lIndex}
                  />
                );
              })}
              {/* Saliou */}
              {word !== sentenceArray[sentenceArray.length - 1] && (
                <input type="text" value="S" maxLength="2" className="espace" />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  useKeyPress((key) => {
    console.log(key);
    setKeydown(key);
  });
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      <span className="keyboard">{keydown}</span>
      <div>
        <Texte />
      </div>
      {console.log("here:", sentence)}
    </div>
  );
}
