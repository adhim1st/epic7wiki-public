import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heroes from "./pages/Heroes";
import Home from "./pages/Home";
import HeroDetail from "./pages/HeroDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/heroes/:heroId">
            <HeroDetail />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
