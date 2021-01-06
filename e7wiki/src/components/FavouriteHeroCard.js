export default function FavouriteHeroCard(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">{props.hero.name}</div>
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
            <i className="fas fa-universal-access"></i> {props.hero.attribute} |{" "}
          </span>
          <span>
            <i className="fas fa-user"></i> {props.hero.role}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
