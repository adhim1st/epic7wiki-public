import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinkit";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroesDetail } from "../store/actions/fetchHeroesDetail";

export default function HeroDetail(props) {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const heroDetail = useSelector((state) => state.heroesReducer.heroDetail);
  const dispatch = useDispatch();
  const { heroId } = useParams();

  useEffect(() => {
    dispatch(fetchHeroesDetail(heroId));
  }, [dispatch]);

  // if (error) {
  //   return <h1>Internal Server Error</h1>;
  // }
  // if (loading) {
  //   return (
  //     <div className=" h-100 d-flex justify-content-center align-items-center ">
  //       <Spinner name="line-spin-fade-loader" color="white" />;
  //     </div>
  //   );
  // }
  return (
    <>
      <h1 style={{ color: "#9f9f9c" }}>Hero Detail</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>{heroDetail.name}</h3>
                <img src={heroDetail.assets.image}></img>
                <p>{heroDetail.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Story</h3>
                <p>{heroDetail.story}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
