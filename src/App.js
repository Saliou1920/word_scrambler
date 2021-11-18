import "./App.css";
import useFetchSentence from "./utils/useFetchSentence";
import { useState } from "react";
import Home from "./components/Home/Home";
import Win from "./components/win/Win";

function App() {
  const [counter, setCounter] = useState(1);
  const [sentence, loading, error] = useFetchSentence(counter);
  const [win, setWin] = useState(false);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Unable to fetch API</div>;
  if (counter >= 10) return <Win />;
  return (
    <div className="App">
      <Home
        sentence={sentence}
        counter={counter}
        setCounter={setCounter}
        setWin={setWin}
      />
    </div>
  );
}

export default App;
