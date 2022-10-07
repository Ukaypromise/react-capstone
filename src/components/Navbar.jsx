import React from "react";
import { Link } from "react-router-dom";
import { NavBarContainer } from "../styles/Navbar.style";

const Navbar = () => {
  return (
    <NavBarContainer>
      <Link className="navLink" to="/">
        <h1 className="nameNav">Crypto Master</h1>
      </Link>
    </NavBarContainer>
  );
};

export default Navbar;
