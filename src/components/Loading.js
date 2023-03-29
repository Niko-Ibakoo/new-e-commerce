import React from "react";
import "../styles/loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loading;
