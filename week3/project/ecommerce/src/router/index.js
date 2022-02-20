import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailScreen from "../screen/DetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import ProductScreen from "../screen/ProductScreen";

const ApplicationRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<ProductScreen />} />
          <Route path="product/:id" element = {<DetailScreen />} />
          <Route path="favorites" element = {<FavoritesScreen />} />
          <Route path="*" element = {<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default ApplicationRouter;
