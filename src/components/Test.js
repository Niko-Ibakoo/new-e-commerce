import React, { useEffect, useState } from "react";
import "../styles/test.css";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const Test = ({ props }) => {
  const cities = ["Rome ", "Naples", "New York", "Los Angeles", "Miami"];
  const times = ["an hour ago ", "15 min ago ", "45 min ago ", "just now ", "today ", "10 min ago"];
  const [randomNum, setRandomNum] = useState(0);

  //data
  const [randomCity, setRandomCity] = useState("");
  const [randomTime, setRandomTime] = useState("");
  const [slide, setSlide] = useState("-550px");

  console.log(props[0]);

  const getRandom = () => {

    setInterval(() => {
      setRandomCity(cities[Math.floor(Math.random() * cities.length)]);
      setRandomNum(Math.floor(Math.random() * props.length));
      setRandomTime(times[Math.floor(Math.random() * times.length)]);
      setSlide("0px");
      setTimeout(() => {
        setSlide("-550px");
      }, 4000);
    }, 10000); //every 6 sec
  };

  useEffect(() => {
    getRandom() 
  },[randomCity]);
  return (
    <div>
      {props[0] && (
        <Link
          to={
            "/Details/" + props[randomNum].id + "/" + props[randomNum].category
          }
          style={{ left: slide }}
          className="test-cont"
        >
          <div className="test-img">
            <img src={props[randomNum] && props[randomNum].image} alt="" />
          </div>
          <div className="test-txt">
            <span style={{ fontWeight: "500" }}>
              {" "}
              someone in {randomCity} bought : <br />
              {props[randomNum] && props[randomNum].title}
            </span>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 0px",
                gap: "10px",
              }}
            >
              {randomTime} <AiFillCheckCircle /> powered by .. me :)
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Test;
