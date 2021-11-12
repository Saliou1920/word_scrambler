import React from "react";
import Sentence from "../Sentence/Sentence";
import "./Home.css";
export default function Home({ sentence }) {
  return (
    <div className="container">
      <Sentence sentence={sentence} />
    </div>
  );
}
