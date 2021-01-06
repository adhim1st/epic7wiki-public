import React, { useState, useEffect } from "react";
import HeroesCard from "../components/HeroesCard";
import useFetch from "../hooks/UseFetch";
import Spinner from "react-spinkit";

export default function Heroes() {
  const {
    heroList,
    filteredHeroList,
    setFilteredHeroList,
    loading,
    error,
  } = useFetch();

  const [filterHero, setFilterHero] = useState("");
  const [rarityFilter, setRarityFilter] = useState("");

  const handleChange = (event) => {
    setFilterHero(event.target.value);
  };
  const rarityChange = (event) => {
    setRarityFilter(event.target.value);
  };
  useEffect(() => {
    const filteredName = heroList.filter((e) =>
      e.name.toLowerCase().includes(filterHero)
    );
    setFilteredHeroList(filteredName);
  }, [filterHero, heroList, setFilteredHeroList]);

  if (error) {
    return <h1>Internal Server Error</h1>;
  }
  if (loading) {
    return (
      <div className=" h-100 d-flex justify-content-center align-items-center ">
        <Spinner name="line-spin-fade-loader" color="white" />;
      </div>
    );
  }
  return (
    <>
      <h1 style={{ color: "#9f9f9c" }}>Hero List</h1>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 col-sm-6">
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="filterHeroes">
                  Search
                </span>
              </div>
              <input
                type="text"
                className="htmlForm-control"
                placeholder="Heroes Name"
                aria-label="Heroes Name"
                aria-describedby="heroes-name"
                value={filterHero}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          {/* <div className="col-md-4 col-sm-6">
            {rarityFilter}
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Rarity
                </span>
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="rarity"
                  id="rarityAll"
                  autoComplete="off"
                  value=""
                  checked={rarityFilter === ""}
                  onChange={rarityChange}
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="rarityAll"
                >
                  All
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="rarity"
                  id="rarity3"
                  autoComplete="off"
                  value="3"
                  checked={rarityFilter === "3"}
                  onChange={rarityChange}
                ></input>
                <label className="btn btn-outline-secondary" htmlFor="rarity3">
                  3 Star
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="rarity"
                  id="rarity4"
                  autoComplete="off"
                  value="4"
                  checked={rarityFilter === "4"}
                  onChange={rarityChange}
                ></input>
                <label className="btn btn-outline-secondary" htmlFor="rarity4">
                  4 Star
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="rarity"
                  id="rarity5"
                  autoComplete="off"
                  value="5"
                  checked={rarityFilter === "5"}
                  onChange={rarityChange}
                ></input>
                <label className="btn btn-outline-secondary" htmlFor="rarity5">
                  5 Star
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 ">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Element
                </span>
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementAll"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementAll"
                >
                  All
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementFire"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementFire"
                >
                  Fire
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementIce"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementIce"
                >
                  Ice
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementWind"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementWind"
                >
                  Wind
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementDark"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementDark"
                >
                  Dark
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="element"
                  id="elementLight"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="elementLight"
                >
                  Light
                </label>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Class
                </span>
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleAll"
                  autoComplete="off"
                ></input>
                <label className="btn btn-outline-secondary" htmlFor="roleAll">
                  All
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleKnight"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="roleKnight"
                >
                  Knight
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleWarrior"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="roleWarrior"
                >
                  Warrior
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleMage"
                  autoComplete="off"
                ></input>
                <label className="btn btn-outline-secondary" htmlFor="roleMage">
                  Mage
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleRanger"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="roleRanger"
                >
                  Ranger
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleHealer"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="roleHealer"
                >
                  Healer
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  id="roleAssassin"
                  autoComplete="off"
                ></input>
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="roleAssassin"
                >
                  Assassin
                </label>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          {filteredHeroList.map((hero) => {
            return <HeroesCard key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </>
  );
}
