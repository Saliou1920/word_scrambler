import logo from "./logo.svg";
import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, setSentence, loading, error] = useFetchSentence(counter);

  function Scrumbler(b) {
    var a = b.split(""),
      n = a.length;

    for (var i = n - 2; i > 1; i--) {
      var j = Math.floor(Math.random() * i) + 1;
      console.log(j);
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }

  return (
    <div className="App">
      <p>{sentence}</p>
      <button onClick={() => setCounter(counter + 1)}>Fetch sentence</button>

      {sentence.split(" ").map((word, index) => (
        <p key={index}> {Scrumbler(word)} </p>
      ))}
    </div>
  );
}

export default App;
