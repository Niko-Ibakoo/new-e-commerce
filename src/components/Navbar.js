import React, { useState } from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
const Navbar = ({ handleEvent, cartItem }) => {
  const men = "men's clothing";
  const woman = "women's clothing";
  const electronics = "electronics";
  const jewelery = "jewelery";
  const allProducts = "https://fakestoreapi.com/products";
  let cartLength = cartItem.length;
  return (
    <header>
      <nav>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <h1 className="logo">
            <span style={{ color: "#e53238" }}>e</span>
            <span style={{ color: "#0064d3" }}>s</span>
            <span style={{ color: "#f5af02" }}>h</span>
            <span style={{ color: "#86b817" }}>o</span>
            <span style={{ color: "orange" }}>p</span>
          </h1>
        </Link>
        <form >
          <input placeholder="jewlery, electronics, shoes.. " type="text" />
          <button>
            <BiSearch className="fa" /> search
          </button>
        </form>
        {/* cart */}
        <div className="cart-container">
          <BsCart2 className="cart" />
          {cartLength>0?<div className="cart-items">{cartLength}</div>: null}
        </div>
        <div className="notification">
          <BsBell />
        </div>
        {/* login / sign up */}
        <div style={{ marginLeft: "auto" }} className="login">
          <span>Sign up</span>
          <span> / </span>
          <span>Log in</span>
        </div>
      </nav>

      {/* category list section */}
      <ul>
        <li
          onClick={() =>
            handleEvent(`https://fakestoreapi.com/products/category/${men}`)
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            men
          </Link>
        </li>
        <li
          onClick={() =>
            handleEvent(`https://fakestoreapi.com/products/category/${woman}`)
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            women
          </Link>
        </li>
        <li
          onClick={() =>
            handleEvent(
              `https://fakestoreapi.com/products/category/${electronics}`
            )
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            electronics
          </Link>
        </li>
        <li
          onClick={() =>
            handleEvent(
              `https://fakestoreapi.com/products/category/${jewelery}`
            )
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            jewelery
          </Link>
        </li>
        <li onClick={() => handleEvent("https://fakestoreapi.com/products")}>
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            all
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
