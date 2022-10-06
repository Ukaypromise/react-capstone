import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link className="navLink" to="/">
        <h1 className="nameNav">Home</h1>
      </Link>
    </div>
  );
};

export default Navbar;
