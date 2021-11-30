import React, { useState } from "react";
import Sentence from "../Sentence/Sentence";
import Guessing from "../Guessing/Guessing";

import "./Home.css";

const Home = React.memo(({ sentence, counter, setCounter }) => {
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      <h1 className="score">Score: {counter - 1}</h1>
      <Guessing sentence={sentence} counter={counter} setCounter={setCounter} />
    </div>
  );
});

export default Home;
