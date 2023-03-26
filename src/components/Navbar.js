import React from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <span style={{ color: "#e53238" }}>E</span>
          <span style={{ color: "#0064d3" }}>S</span>
          <span style={{ color: "#f5af02" }}>H</span>
          <span style={{ color: "#86b817" }}>O</span>
          <span style={{ color: "orange" }}>P</span>
        </h1>
        <form action="submit">
          <input
            placeholder="jewlery, electronics, men clothes.. "
            type="text"
          />
          <button>
            <BiSearch className="fa" /> search
          </button>
        </form>
        <div className="dropdown">
          <span>Categories</span>
          <div className="dropdown-content">
            <p>men</p>
            <p>women</p>
            <p>electronics</p>
            <p>jewelry</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
