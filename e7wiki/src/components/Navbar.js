import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#343739" }}
    >
      <a className="navbar-brand">E7Wiki</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              <NavLink exact to="/">
                Home
              </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <NavLink to="/heroes">Heroes</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
