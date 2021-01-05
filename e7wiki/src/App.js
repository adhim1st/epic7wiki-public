import React, { useState, useEffect } from "react";
import "./App.css";
import HeroesCard from "./components/HeroesCard";

function App() {
  const [heroList, setHeroList] = useState([]);
  const [filteredHeroList, setFilteredHeroList] = useState([]);
  const [filterHero, setFilterHero] = useState("");

  const handleChange = (event) => {
    setFilterHero(event.target.value);
  };

  useEffect(() => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filtered = heroList.filter((e) =>
      e.name.toLowerCase().includes(filterHero)
    );
    setFilteredHeroList(filtered);
  }, [filterHero, heroList]);

  return (
    <div className="App">
      <h1 style={{ color: "#9f9f9c" }}>Hero List</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="filterHeroes">
                  Search
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Heroes Name"
                aria-label="Heroes Name"
                aria-describedby="heroes-name"
                value={filterHero}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredHeroList.map((hero) => {
            return <HeroesCard key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
