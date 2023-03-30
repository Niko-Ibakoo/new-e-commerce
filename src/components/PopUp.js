import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "../styles/popUp.css";
const PopUp = ({ title, image ,visibility}) => {
  const toggle =  visibility ? '7%' : '-15%'
  return (
    <>
      <div style={{top:toggle}} className="p-container">
        <div className="p-img-container">
          <img src={image} alt="" />
        </div>
        <div className="p-txt-container">
          <span style={{fontSize:'20px', fontWeight:'500', display:'flex', alignItems:'center'}}>
            <AiFillCheckCircle style={{color:'green'}} /> Added to cart !
          </span>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default PopUp;
