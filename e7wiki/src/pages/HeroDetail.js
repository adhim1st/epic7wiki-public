import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HeroDetail(props) {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { heroId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.epicsevendb.com/hero/${heroId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data.results[0]);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally((_) => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 style={{ color: "#9f9f9c" }}>Hero Detail</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>{heroData.name}</h5>
                <p>{heroData.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Story</h3>
                <p>{heroData.story}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
