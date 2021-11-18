import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, loading, error] = useFetchSentence(counter);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Unable to fetch API</div>;
  return (
    <div className="App">
      <Home sentence={sentence} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
