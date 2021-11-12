import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";
import Sentence from "./components/Sentence/Sentence.js";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, loading, error] = useFetchSentence(counter);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Unable to fetch API</div>;
  return (
    <div className="App">
      {/* <p>{sentence}</p>
      <button onClick={() => setCounter(counter + 1)}>Fetch sentence</button> */}
      <Sentence sentence={sentence} />
    </div>
  );
}

export default App;
