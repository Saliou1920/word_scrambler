import React, { useState } from "react";
// import useKeyPress from "../../utils/useKeyPress";
import Sentence from "../Sentence/Sentence";
import "./Home.css";
const Home = React.memo(({ sentence }) => {
  const [keydown, setKeydown] = useState();
  //   const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentenceArray, setSentenceArray] = useState(sentence.split(" "));

  function Texte() {
    const [isCorresct, setIsCorrect] = useState(false);
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
                    className={isCorresct ? "correct" : ""}
                    onChange={(e) => {
                      if (e.target.nextSibling) {
                        e.target.nextSibling.focus();
                      }
                      if (e.target.value === letter) {
                        console.log("VRAI");
                        setIsCorrect(true);
                      } else {
                        console.log("FAUX");
                        setIsCorrect(false);
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
                    if (e.target.nextSibling) {
                      e.target.nextSibling.focus();
                    }
                    if (e.target.value === " ") {
                      console.log("VRAI");
                      setIsCorrect(true);
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
