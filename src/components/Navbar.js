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
      </nav>
      <ul>
          <li> <a href=""> man</a></li>
          <li> <a href=""> woman</a></li>
          <li> <a href=""> electronics</a></li>
          <li> <a href=""> jewlery</a></li>
        </ul>
    </header>
  );
};

export default Navbar;
