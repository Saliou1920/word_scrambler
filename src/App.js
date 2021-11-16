import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";
import Home from "./components/Home/Home";
import useKeyPress from "./utils/useKeyPress";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, loading, error] = useFetchSentence(counter);
  const [keydown, setKeydown] = useState();
  const [test, setTest] = useState("je m'appelle saliou diop");
  const [test2, setTest2] = useState(0);

  console.log(test.split(""));
  useKeyPress((key) => {
    console.log(key);
    setKeydown(key);
  });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Unable to fetch API</div>;
  return (
    <div className="App">
      <Home sentence={sentence} />
      {console.log("length", sentence)}
      <button onClick={() => setTest2(test2 + 1)}>Next</button>
    </div>
  );
}

export default App;
