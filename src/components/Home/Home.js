import React, { useState } from "react";
import Sentence from "../Sentence/Sentence";
import Guessing from "../Guessing/Guessing";

import "./Home.css";

const Home = React.memo(({ sentence, counter, setCounter }) => {
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      <div>
        <Guessing
          sentence={sentence}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
    </div>
  );
});

export default Home;
