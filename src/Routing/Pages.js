import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const Pages = ({data}) => {
  return (
    <Routes>
      <Route path="/" element={<Home props ={data} />} />
    </Routes>
  );
};

export default Pages;
