import React, { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import { FaStar } from "react-icons/fa";
import "../styles/details.css";

const Details = ({props}) => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]); //for the you might also like


  //add to cart


  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${params.id}`).then(
      (res, err) => {
        err ? console.log("the error is: " + err) : setProduct(res.data);
      }
    );
    Axios.get(`https://fakestoreapi.com/products/category/${params.type}`).then(
      (res, err) => {
        err ? console.log("the error is: " + err) : setCategory(res.data);
      }
    );
  }, [params]);

  return (
    <>
      {product.title? <main>
        <div className="container">
          <div className="img-col">
            <img src={product.image} alt="" />
          </div>
          <div className="txt-col">
            <h1 style={{ marginTop: "0", color: "#000" }}>{product.title}</h1>
            <span>
              <FaStar className="stars" />
              <FaStar className="stars" />
              <FaStar className="stars" />
              <FaStar style={{marginRight:'3px'}} className="stars" />
              {`(${product.rating.count})`}
            </span>
            <p>{product.description}</p>
            <h3 style={{color:'red'}}> ${product.price}</h3>
            <div className="product-btn">
              <button>continue shopping</button>
              <button onClick={()=>props.cartEvent(product)}>add to cart</button>
            </div>
          </div>
        </div>
      </main> : <Loading/>}
      {/* YOU MIGHT ALSO LIKE SECTION */}
      {category[0] && (
        <div className="bottom-container">
          <h1>You may also like ..</h1>
          <div className="grid">
            {category.map((item, index) => (
              <div key={index} className="card">
                <div className="img-container">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.title}</p>
                <p style={{fontWeight:'600'}}>$ {item.price - 3}</p>
                <p style={{textDecoration:'line-through'}}>$ {item.price} </p> 
              </div>
            ))}
          </div>
          <div className="img-filler">
            <img
              src="https://i.ebayimg.com/thumbs/images/g/kt4AAOSwiEFf28li/s-l1200.webp"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
