import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Routing/Pages";
import Navbar from "./components/Navbar";
import axios from "axios";
import ScroolToTop from "./components/ScrollToTop";

function App() {
  const [data, setData] = useState([]);
  //cart
  const [cartItem, setCartItem] = useState([]);
  //dynamic endpoint with allProducts as default
  const [endpoint, setEndpoint] = useState("https://fakestoreapi.com/products");
  //dynamic data ,
  const getData = (endpoint) => {
    axios.get(endpoint).then((res) => setData(res.data));
  };
  // /fucntion fired to hcange category when clicking li in navbar
  const changeEndpoint = (item) => {
    setEndpoint(item);
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return (
    <BrowserRouter>
      <ScroolToTop />
      <Navbar handleEvent={changeEndpoint} cartItem={cartItem} />
      <Pages
        cartEvent={(item) => setCartItem((current) => [...current, item])}
        cartItems={cartItem}
        data={data}
      />
    </BrowserRouter>
  );
}

export default App;
