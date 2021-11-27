import React from 'react';
import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
      <div>
        <Link className="footer-nav-link" to="/">Home</Link>
        <Link className="footer-nav-link" to="/about">About</Link>
        <Link className="footer-nav-link"  to="/contact">Contact</Link>
      </div>
    );
};

export default BottomNav;