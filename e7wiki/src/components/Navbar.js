import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#343739" }}
    >
      <a class="navbar-brand" href="">
        E7Wiki
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <NavLink exact to="/">
                Home
              </NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink to="/heroes">Heroes</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
