import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import HeaderTitle from "./Components/HeaderTitle";
import Solutions from "./Components/Solutions";
import About from "./Components/About";
import Slider from './Components/Slider'
import Future from "./Components/Future";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <HeaderTitle />
    <Solutions />
    <About />
    <Slider />
    <Future />
  </>
);
