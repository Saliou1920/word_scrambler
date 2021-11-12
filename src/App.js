import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";
import Home from "./components/Home/Home";
import useKeyPress from "./utils/useKeyPress";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, loading, error] = useFetchSentence(counter);
  const [keydown, setKeydown] = useState();

  useKeyPress((key) => {
    console.log(key);
    setKeydown(key);
  });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Unable to fetch API</div>;
  return (
    <div className="App">
      <Home sentence={sentence} />
      <span>{keydown}</span>
    </div>
  );
}

export default App;
