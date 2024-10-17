import React, { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${queryTerm}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
