import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import './TopNavStyle.css';


//Make active nav links dynamic 
const IsActive = (endpoint) => {
  const currentPath = useLocation().pathname;
  const inactiveLink = "nav-link";
  const activeLink = inactiveLink + " active";
  return currentPath === endpoint ? activeLink : inactiveLink;
}


const TopNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <div className="container">
          <a className="navbar-brand auto-display" href="/">
            My Portfolio
          </a>
          {/* --- Navbar menu toggler button --- */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* --- Collapsible nav menu --- */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* --- Navigation Links --- */}
            <div className="navbar-nav">
              <Link className={IsActive("/")} to="/">
                Home
              </Link>
              <Link className={IsActive("/about")} to="/about">
                About
              </Link>
              <Link className={IsActive("/contact")} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default TopNav;