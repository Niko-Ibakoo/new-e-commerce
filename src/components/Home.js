import React from "react";
import "../styles/home.css";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Home = ({ props }) => {
  const data = props;
  return (
    <>
      {data[0] ? (
        <main>
          <div className="main-container">
            <div className="img-header">
              <div id="txt" className="txt">
                <h2>Hello there friend</h2>
                <p>Welcome to my e-commerce app</p>
                <h1 id="tagline" className="tagline">
                  SNEAKERS 50% OFF !
                </h1>
              </div>
            </div>
            <div id="grid" className="grid">
              {data.map((item, index) => (
                <div key={index} className="card">
                  <div className="img-container">
                    <Link to={"/Details/" + item.id + "/" + item.category}>
                      <img src={item.image} alt="" />
                    </Link>
                  </div>
                  <div className="txt-container">
                    <p>{item.title}</p>
                    <h4>$ {item.price}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="img-filler">
              <img style={{borderRadius:0}}
                src="https://i.ebayimg.com/thumbs/images/g/kt4AAOSwiEFf28li/s-l1200.webp"
                alt=""
              />
            </div>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
