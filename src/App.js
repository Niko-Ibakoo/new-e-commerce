import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Routing/Pages";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  //dynamic endpoint with allProducts as default
  const [endpoint,setEndpoint] = useState("https://fakestoreapi.com/products") 
  //dynamic data , 
  const getData = (endpoint) => {
    axios.get(endpoint).then((res) => setData(res.data));
   
  };
  // /fucntion fired on li click
  const changeEndpoint = (item)=>{
    setEndpoint(item)
  }
  useEffect(() => {
    getData(endpoint)
  }, [endpoint]);

  return (
    <BrowserRouter>
      <Navbar handleEvent={changeEndpoint} />
      <Pages  data={data} />
    </BrowserRouter>
  );
}

export default App;
