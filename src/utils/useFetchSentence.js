import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.hatchways.io/assessment/sentences";

export default function useFetchSentence(counter) {
  const [sentence, setSentence] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/${counter}`)
      .then((response) => {
        setSentence(response.data.data.sentence);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [counter]);

  return [sentence, setSentence, loading, error];
}
