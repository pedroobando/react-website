import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToriiGate,
  faHome,
  faNewspaper,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const iconNews = <FontAwesomeIcon icon={faNewspaper} />;
const iconHome = <FontAwesomeIcon icon={faHome} />;
const iconLogo = <FontAwesomeIcon icon={faToriiGate} size="2x" />;
const iconBars = <FontAwesomeIcon icon={faBars} />;

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand ml-5 text-white" to="/">
        {iconLogo}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span style={{ color: "white" }}>{iconBars}</span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-sm-0 ml-md-5" to="/">
              Home <span className="ml-1">{iconHome}</span>
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-sm-0 ml-md-5"
              to="/news"
            >
              News {iconNews}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-sm-0 ml-md-5"
              to="/contacts"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
