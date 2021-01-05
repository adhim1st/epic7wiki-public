import React, { useState, useEffect } from "react";

export default function useFetch(props) {
  const [heroList, setHeroList] = useState([]);
  const [filteredHeroList, setFilteredHeroList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.epicsevendb.com/hero")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((res) => res.json())
      .then((data) => {
        setHeroList(data.results);
        setFilteredHeroList(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);
  return {
    heroList,
    setHeroList,
    filteredHeroList,
    setFilteredHeroList,
    loading,
    error,
  };
}
