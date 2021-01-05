import React, { Component } from "react";

class HeroesCard extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <a href="">
          <div className="card" style={{ marginBottom: "1em" }}>
            <div className="card-header">{this.props.hero.name}</div>
            <img
              className="card-img-top"
              src={this.props.hero.assets.image}
              style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            ></img>
          </div>
        </a>
      </div>
    );
  }
}

export default HeroesCard;
