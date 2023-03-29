import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import axios, { all } from "axios";

const Navbar = ({ handleEvent, cartItem }) => {
  const men = "men's clothing";
  const woman = "women's clothing";
  const electronics = "electronics";
  const jewelery = "jewelery";
  let cartLength = cartItem.length;
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const toggVisibility = toggle ? "visible" : "hidden";

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);
  //form
  const [inputValue, setInputValue] = useState("");
  //search data
  const onSearch = (searchedProduct) => {
    setInputValue(searchedProduct);
    setToggle(false);
  };

  return (
    <header>
      <nav>
        <Link
          onClick={() => setInputValue("")}
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          <h1 className="logo">
            <span style={{ color: "#e53238" }}>e</span>
            <span style={{ color: "#0064d3" }}>s</span>
            <span style={{ color: "#f5af02" }}>h</span>
            <span style={{ color: "#86b817" }}>o</span>
            <span style={{ color: "orange" }}>p</span>
          </h1>
        </Link>
        <div className="form">
          <input
            onClick={() => setToggle(true)}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            value={inputValue}
          />
          <button>
            <BiSearch className="fa" /> search
          </button>
          <div style={{ visibility: toggVisibility }} className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = inputValue.toLocaleLowerCase();
                const product = item.title.toLocaleLowerCase();
                return searchTerm && product.includes(searchTerm); // if searchTermis true return something else return nothing
              })
              .map((item, index) => (
                <div
                  onClick={() => onSearch(item.title)}
                  key={index}
                  className="dropdown-row"
                >
                  <Link
                    className="link"
                    to={"/Details/" + item.id + "/" + item.category}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* cart */}
        <div className="cart-container">
          <BsCart2 className="cart" />
          {cartLength > 0 ? (
            <div className="cart-items">{cartLength}</div>
          ) : null}
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
