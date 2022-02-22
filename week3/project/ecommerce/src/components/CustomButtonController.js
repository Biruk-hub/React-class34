import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import CustomLoading from "./CustomLoading";
import useFetch from "../hooks/useFetch";

const CustomButtonController = ({ categoryHandler }) => {
  const URL = "https://fakestoreapi.com/products/categories";
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const { isLoading, data, error } = useFetch({ url: URL });

  useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data]);

  const handleCategory = (category) => {
    categoryHandler(category);
    setActiveCategory(category);
  };
  return (
    <>
      {isLoading ? (
        <CustomLoading text="Loading categories..." />
      ) : error ? (
        <CustomLoading text={error.message} />
      ) : (
        category.map((category, index) => (
          <CustomButton
            key={index}
            text={category}
            onClick={handleCategory}
            active={activeCategory === category}
          />
        ))
      )}
    </>
  );
};

export default CustomButtonController;
