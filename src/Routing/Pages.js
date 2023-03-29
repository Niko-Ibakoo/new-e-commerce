import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";
import Loading from "../components/Loading";

const Pages = ({data,cartItems,cartEvent}) => {
  return (
    <Routes>
      <Route path="/" element={<Home props ={data} />} />
      <Route path="/loading/" element={<Loading props ={data} />} />
      <Route path="/Details/:id/:type" element={<Details props={{cartEvent,cartItems}} />} />
    </Routes>
  );
};

export default Pages;
