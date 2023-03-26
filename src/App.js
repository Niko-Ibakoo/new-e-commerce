import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Routing/Pages";
import Navbar from "./components/Navbar";
// # 1 WEEK - TODO:
//1) get data from https://fakestoreapi.com/ and display items in Home.js component - Niko
//2) create Home.css and set up routing system - Niko
//3) set up pages paths - Niko
//4) create/design Home & Product layout on Figma or Miro whiteboard - Chase
//5) create Product.js component & Product.css  - Chase
//6) in Home.js when clicking on image send the image id as parameter into to Product.js component - Chase
//7) in Product.js component make API call based on that id (SEE API DOCS.txt file) - Chase
//8) Celebrate the end of sprint 1 first week !!! :D

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
