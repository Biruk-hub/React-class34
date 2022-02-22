import React, { useState, useEffect, useContext } from "react";
import ShopItem from "./ShopItem";
import CustomLoading from "./CustomLoading";
import { FavoriteContext } from "../provider/Favorite";

const FavoriteItemController = () => {
  const URL = "https://fakestoreapi.com/";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      favorites.forEach(async (favoriteId) => {
        await fetch(URL + `products/${favoriteId}`)
          .then((res) => res.json())
          .then((data) => setProducts([...products, data]));
      });
      setIsLoading(false);
    })();
  },[products, favorites]);

  return(
    <div>
      <p>Favorite : {favorites}</p>
      {console.log(`products : ${products}`)}
    </div>
  )
};

export default FavoriteItemController;
