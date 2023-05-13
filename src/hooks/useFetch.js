import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (apiurl, movieNames) => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValues, setInputValues] = useState(movieNames);

  const inputHandler = (event) => {
    setInputValues(event.target.value);
  };

  const getMovies = async () => {
    try {
      const response = await axios(apiurl, {
        params: { query: inputValues },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (inputValues) {
        getMovies();
      }
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [inputValues]);

  return {
    searchResults,
    inputHandler,
    inputValues,
  };
};
