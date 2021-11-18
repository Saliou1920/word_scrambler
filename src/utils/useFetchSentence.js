import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.hatchways.io/assessment/sentences";

export default function useFetchSentence(counter) {
  const [sentence, setSentence] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`${url}/${counter}`)
      .then((response) => {
        setSentence(response.data.data.sentence);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [counter]);

  return [sentence, loading, error];
}
