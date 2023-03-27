import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";

const Pages = ({data}) => {
  return (
    <Routes>
      <Route path="/" element={<Home props ={data} />} />
      <Route path="/Details/:id/:type" element={<Details/>} />
    </Routes>
  );
};

export default Pages;
