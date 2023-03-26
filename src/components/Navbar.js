import React, { useState } from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";

const Navbar = ({handleEvent}) => {
  const men = "men's clothing"
  const woman = "women's clothing";
  const electronics = "electronics"
  const jewelery = "jewelery"
  const allProducts = "https://fakestoreapi.com/products"


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
        <li onClick={()=>handleEvent(`https://fakestoreapi.com/products/category/${men}`)}>
          man
        </li>
        <li onClick={()=>handleEvent(`https://fakestoreapi.com/products/category/${woman}`)}>
          woman
        </li>
        <li onClick={()=>handleEvent(`https://fakestoreapi.com/products/category/${electronics}`)}>
          electronics
        </li>
        <li onClick={()=>handleEvent(`https://fakestoreapi.com/products/category/${jewelery}`)}>
          jewelery
        </li>
        <li onClick={()=>handleEvent("https://fakestoreapi.com/products")}>
          all
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
