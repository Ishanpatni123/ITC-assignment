import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar sticky-top navbar-expand-lg bg-dark bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          PROJECT PORTAL LOGO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Projects" class="nav-link">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Login" class="nav-link">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Register" class="nav-link">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ToDo" class="nav-link">
                ToDo
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
