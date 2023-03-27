import React from "react";
import "../styles/home.css";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Home = ({props}) => {

  const data = props
  return (
    <main>
      <div className="main-container">
        <div className="img-header">
          <div className="txt">
            <h2>Hello there friend</h2>
            <p>Welcome to my e-commerce app</p>
            <h1>SNEAKERS 50% OFF !</h1>
          </div>
        </div>
        <div className="grid">
          {data[0] ? (
            data.map((item, index) => (
              <div key={index} className="card">
                <div className="img-container">
                  <Link to={'/Details/'+item.id+'/'+item.category}><img src={item.image} alt="" /></Link>
                </div>
                <div className="txt-container">
                  <p>{item.title}</p>
                  <h4>$ {item.price}</h4>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <div className="img-filler">
          <img
            src="https://i.ebayimg.com/thumbs/images/g/kt4AAOSwiEFf28li/s-l1200.webp"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;