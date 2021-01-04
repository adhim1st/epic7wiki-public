import React, { Component } from "react";
import "./App.css";
import Heroes from "./components/Heroes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroList: [],
    };
  }

  componentDidMount() {
    fetch("https://api.epicsevendb.com/hero")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          heroList: data.results,
        });
      });
  }

  render() {
    const { heroList } = this.state;
    return (
      <div className="App">
        <h1 style={{ color: "#9f9f9c" }}>Hero List</h1>
        <div className="container">
          <div className="row">
            {heroList.map((hero) => {
              return <Heroes key={hero.id} hero={hero} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
