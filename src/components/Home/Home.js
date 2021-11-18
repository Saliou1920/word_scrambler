import React, { useState } from "react";
import Sentence from "../Sentence/Sentence";
import Guessing from "../Guessing/Guessing";

import "./Home.css";

const Home = React.memo(({ sentence, counter, setCounter, setWin }) => {
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      <div>
        <Guessing
          sentence={sentence}
          counter={counter}
          setCounter={setCounter}
          setWin={setWin}
        />
      </div>
    </div>
  );
});

export default Home;
