import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavourite } from "../store/actions/setFavourite";
function HeroesCard(props) {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.heroesReducer.favourite);

  function addFavourite(data) {
    let duplicate = false;
    for (let i = 0; i < favourite.length; i++) {
      if (favourite[i]._id === data._id) {
        duplicate = true;
      }
    }
    if (duplicate === false) {
      dispatch(setFavourite(data));
    }
  }

  return (
    <div className="col-sm-6 col-md-4">
      <div className="card" id="heroes-card" style={{ marginBottom: "1em" }}>
        <a href="">
          <Link
            to={{
              pathname: `/heroes/${props.hero._id}`,
              state: {
                heroImg: props.hero.image,
              },
            }}
          >
            <div className="card-header">{props.hero.name}</div>{" "}
            <img
              className="card-img-top"
              src={props.hero.assets.image}
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            ></img>
            <div className="card-body">
              <span>
                <i className="fas fa-star"></i> {props.hero.rarity} |{" "}
              </span>
              <span>
                <i className="fas fa-universal-access"></i>{" "}
                {props.hero.attribute} |{" "}
              </span>
              <span>
                <i className="fas fa-user"></i> {props.hero.role}{" "}
              </span>
            </div>
          </Link>
        </a>
        <div className="card-footer">
          <button
            onClick={() => {
              addFavourite(props.hero);
            }}
            type="button"
            class="btn btn-danger"
          >
            <i class="fas fa-heart"></i> Favourite
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroesCard;
