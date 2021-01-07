import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinkit";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroesDetail } from "../store/actions/fetchHeroesDetail";

export default function HeroDetail(props) {
  const heroDetail = useSelector((state) => state.heroesReducer.heroDetail);
  const loading = useSelector((state) => state.heroesReducer.loading);
  const dispatch = useDispatch();
  const { heroId } = useParams();

  useEffect(() => {
    dispatch(fetchHeroesDetail(heroId));
  }, [dispatch, heroId]);

  if (loading) {
    return (
      <div className=" h-100 d-flex justify-content-center align-items-center ">
        <Spinner name="line-spin-fade-loader" color="white" />;
      </div>
    );
  }
  if (!heroDetail.assets) {
    console.log(heroDetail);
    return <h1>loading</h1>;
  }
  return (
    <>
      <h1 style={{ color: "#9f9f9c" }}>Hero Detail</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>{heroDetail.name}</h3>
                <img src={heroDetail.assets.image} alt={heroDetail.name}></img>
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
