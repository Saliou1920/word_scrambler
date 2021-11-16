import React, { useState } from "react";
// import useKeyPress from "../../utils/useKeyPress";
import Sentence from "../Sentence/Sentence";
import "./Home.css";
const Home = React.memo(({ sentence }) => {
  const [sentenceArray, setSentenceArray] = useState(sentence.split(" "));

  function onNextSibling(e) {
    const { target } = e;
    const { nextSibling } = target;
    if (nextSibling) {
      nextSibling.focus();
    }
  }
  function Texte() {
    return (
      <div className="texte">
        {sentence.split(" ").map((word, wIndex) => {
          return (
            <div className={"texte-1"}>
              {word.split("").map((letter, lIndex) => {
                return (
                  <input
                    type="text"
                    maxLength="1"
                    key={lIndex}
                    className=""
                    onChange={(e) => {
                      onNextSibling(e);
                      if (e.target.value === letter) {
                        e.target.className = "correct";
                      }
                    }}
                  />
                );
              })}
              {/* check if it is the last word */}
              {word !== sentenceArray[sentenceArray.length - 1] && (
                <input
                  type="text"
                  maxLength="1"
                  className="espace"
                  onChange={(e) => {
                    onNextSibling(e);

                    if (e.target.value === " ") {
                      console.log("VRAI");
                      e.target.className = "correct";
                    }
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  //   const keypress = useKeyPress((key) => {
  //     setKeydown(key);
  //   });
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      {/* <span className="keyboard">{keydown}</span> */}
      <div>
        <Texte />
      </div>
    </div>
  );
});

export default Home;
