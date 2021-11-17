import React, { useState } from "react";
import "./Guessing.css";

const Guessing = React.memo(({ sentence }) => {
  const [sentenceArray, setSentenceArray] = useState(sentence?.split(" "));
  const [reponse, setReponse] = useState(0);

  function onNextSibling(e) {
    const { target } = e;
    const { nextSibling } = target;
    if (nextSibling) {
      nextSibling.focus();
    }
  }

  return (
    <div className="guessing">
      {sentence?.split(" ").map((word, wIndex) => {
        return (
          <div className={"guessing-word"}>
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
                      setReponse(reponse + 1);
                    } else {
                      e.target.className = "incorrect";
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
                    setReponse(reponse + 1);
                  } else {
                    e.target.className = "incorrect";
                  }
                }}
              />
            )}
          </div>
        );
      })}
      {reponse === sentence?.length && <button className="btn">Next</button>}
    </div>
  );
});

export default Guessing;
