import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import CustomLoading from "./CustomLoading";

const CustomButtonController = ({ categoryHandler }) => {
  const URL = "https://fakestoreapi.com/";
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    (async () => {
      await fetch(URL + "products/categories")
        .then((res) => res.json())
        .then((data) => setCategory(data))
        .catch((err) => alert(err.message));
    })();
    return () => {
      setCategory([]);
    };
  }, []);

  const handleCategory = (category) => {
    categoryHandler(category);
    setActiveCategory(category);
  };
  return (
    <>
      {category.length > 0 ? (
        category.map((category, index) => (
          <CustomButton
            key={index}
            text={category}
            onClick={handleCategory}
            active={activeCategory === category}
          />
        ))
      ) : (
        <CustomLoading text="Loading categories..." />
      )}
    </>
  );
};

export default CustomButtonController;
