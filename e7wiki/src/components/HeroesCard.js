function HeroesCard(props) {
  return (
    <div className="col-sm-6 col-md-4">
      <a href="">
        <div className="card" style={{ marginBottom: "1em" }}>
          <div className="card-header">{props.hero.name}</div>
          <img
            className="card-img-top"
            src={props.hero.assets.image}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          ></img>
          <div className="card-footer">
            <span>
              <i className="fas fa-star"></i> {props.hero.rarity} |{" "}
            </span>
            <span>
              <i className="fas fa-universal-access"></i> {props.hero.attribute}{" "}
              |{" "}
            </span>
            <span>
              <i className="fas fa-user"></i> {props.hero.role}{" "}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default HeroesCard;
