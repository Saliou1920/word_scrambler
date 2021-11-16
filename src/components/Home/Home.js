import React, { useState } from "react";
import useKeyPress from "../../utils/useKeyPress";
import Sentence from "../Sentence/Sentence";
import "./Home.css";
export default function Home({ sentence }) {
  const [keydown, setKeydown] = useState();

  useKeyPress((key) => {
    console.log(key);
    setKeydown(key);
  });
  return (
    <div className="container">
      <Sentence sentence={sentence} />
      <span className="keyboard">{keydown}</span>
    </div>
  );
}
