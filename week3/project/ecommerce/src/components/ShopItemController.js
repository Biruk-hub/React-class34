import React, { useState, useEffect } from "react";
import CustomLoading from "./CustomLoading";
import ShopItem from "./ShopItem";

const ShopItemController = ({ selectedCategory = "" }) => {
  const URL = "https://fakestoreapi.com/";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const path =
      selectedCategory === ""
        ? "products"
        : `products/category/${selectedCategory}`;
    (async () => {
      await fetch(URL + path)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => alert(err.message));
      setIsLoading(false);
    })();
  }, [selectedCategory]);

  const getProducts = () => {
    return isLoading ? (
      <CustomLoading />
    ) : (
      <div className="bg-gray-100 w-full flex flex-row p-2 mx-auto flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ShopItem key={product.id} data={product} />
        ))}
      </div>
    );
  };

  return getProducts();
};

export default ShopItemController;
