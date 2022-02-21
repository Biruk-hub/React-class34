import React, { useState, useEffect, useContext } from "react";
import ShopItem from "./ShopItem";
import CustomLoading from "./CustomLoading";
import { FavoriteContext } from "../provider/Favorite";

const FavoriteItemController = () => {
  const URL = "https://fakestoreapi.com/";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const fetchFavoriteProducts = async () => {
    if (favorites.length > 0) {
      setIsLoading(true);
      const result = []
      favorites.forEach(async (favorite) => {
        await fetch(URL + `products/${favorite}`)
          .then((res) => res.json())
          .then((data) => result.push(data));
      });
      setProducts(result);
      console.log(result);
      setIsLoading(false);
    }
    else {
      alert("No favorites");
    }
  // };

  // useEffect(() => {
  //   fetchFavoriteProducts();
  // }, []);

  return isLoading ? (
    <CustomLoading  />
  ) : (
    products.map((product) => <p>item loaded </p>)
  );
};

export default FavoriteItemController;
