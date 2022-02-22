import React, { useState, useEffect, useContext } from "react";
import ShopItem from "./ShopItem";
import CustomLoading from "./CustomLoading";
import { FavoriteContext } from "../provider/Favorite";

const FavoriteItemController = () => {
  const URL = "https://fakestoreapi.com/";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const getProducts = async (id) => {
    const response = await fetch(URL + `products/${id}`);
    const data = await response.json();
    setProducts((prevData) => [...prevData, data]);
  };

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    favorites.forEach((id) => {
      getProducts(id);
    });
    setIsLoading(false);
  }, [favorites]);

  const renderUI = () => {
    if (favorites.length > 0) {
      return products.map((product) => (
        <ShopItem key={product.id} data={product} />
      ));
    } else {
      return (
        <div className="text-center">
          <h1>No Favorites</h1>
        </div>
      );
    }
  };

  return isLoading ? (
    <CustomLoading />
  ) : (
    <div className="bg-gray-100 w-full flex flex-row p-2 mx-auto flex-wrap justify-center gap-6">
      {/* {products.map((product) => (
        <ShopItem key={product.id} data={product} />
      ))} */}
      { renderUI() }
    </div>
  );
};

export default FavoriteItemController;
