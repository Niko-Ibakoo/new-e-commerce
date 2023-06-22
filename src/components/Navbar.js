import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { GiHighHeel } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { GiBigDiamondRing } from "react-icons/gi";
import {GiLargeDress} from 'react-icons/gi'
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
      <div className="top-section">
        <div className="icons-container">
          <div className="login">
            <BiUser />
          </div>
          <div className="cart-container">
            <BsCart2 className="cart" />
            {cartLength > 0 ? (
              <div className="cart-items">{cartLength}</div>
            ) : null}
          </div>
          <div className="notification">
            <VscBell />
          </div>
        </div>
      </div>

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
            placeholder="Search for anything"
          />
          {inputValue && (
            <div onClick={() => setInputValue("")} className="clear">
              Clear
            </div>
          )}
          <button>
            <BiSearch className="fa" />
          </button>
          <div style={{ visibility: toggVisibility }} className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = inputValue.toLocaleLowerCase();
                const product = item.title.toLocaleLowerCase();
                // if searchTermi exists and it includes the value return something else return nothing
                if (searchTerm && product.includes(searchTerm)) {
                  return searchTerm;
                }
                // return searchTerm && product.includes(searchTerm); shorter version
              })
              .map((item, index) => (
                <Link
                  to={"/Details/" + item.id + "/" + item.category}
                  onClick={() => onSearch(item.title)}
                  key={index}
                  className="dropdown-row"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        {/* { <div className="no-result">no result found for "{inputValue}"</div>} */}
      </nav>

      {/* category list section */}
      <ul>
        <li
          onClick={() =>
            handleEvent(`https://fakestoreapi.com/products/category/${men}`)
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
            {window.innerWidth>700? 'men' : <FaTshirt/>}
          </Link>
        </li>
        <li
          onClick={() =>
            handleEvent(`https://fakestoreapi.com/products/category/${woman}`)
          }
        >
          <Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>
          {window.innerWidth>700? 'women' : <GiLargeDress />}
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
          {window.innerWidth>700? 'electronics' : <MdComputer style={{color:'#fff'}}/>}
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
          {window.innerWidth>700? 'jewelery' : <GiBigDiamondRing style={{color:'#fff'}}/>} 
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
