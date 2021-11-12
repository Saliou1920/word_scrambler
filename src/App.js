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
    if (n <= 3) return b;
    if (n === 4) return a[0] + a[2] + a[1] + a[3];
    if (n > 4) {
      for (var i = n - 2; i > 1; i--) {
        var j = Math.floor(Math.random() * i) + 1;
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join("");
    }
  }

  return (
    <div className="App">
      <p>{sentence}</p>
      <button onClick={() => setCounter(counter + 1)}>Fetch sentence</button>

      {sentence.split(" ").map((word, index) => (
        <span key={index}> {Scrumbler(word)} </span>
      ))}
    </div>
  );
}

export default App;
