import React, { useState } from "react";
import useKeyPress from "../../utils/useKeyPress";
import SentenceMemo from "../Sentence/Sentence";
import "./Home.css";
export default function Home({ sentence }) {
  const [keydown, setKeydown] = useState();

  useKeyPress((key) => {
    console.log(key);
    setKeydown(key);
  });
  return (
    <div className="container">
      <SentenceMemo sentence={sentence} />
      <span className="keyboard">{keydown}</span>
    </div>
  );
}

export const MemoHome = React.memo(Home);
