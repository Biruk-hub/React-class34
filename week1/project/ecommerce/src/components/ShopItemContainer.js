import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import ShopItem from "./ShopItem";
import FakeCategories from "./../fake-data/all-categories";
import FakeProduct from "./../fake-data/all-products";

const ShopItemContainer = () => {
  const [category, setCategory] = useState("all");

  const handleCategory = (category) => {
    setCategory(category);
  };
  
  useEffect(() => {
    ProductList();
  });

  const ProductList = () => {
    const itemCategory = category.split("FAKE: ")[1];
    if (category === "all") {
      const products = FakeProduct;
      return (
          products.map((product, index) => (
            <ShopItem key={index} data={product} />
          ))
      );
    } else {
      const products = FakeProduct.filter(
        (item) => item.category === itemCategory
      );
      return (products.map((product, index) => (
            <ShopItem key={index} data={product} />
          ))
      );
    }
  };

  return (
    <div className="w-screen h-auto">
      {/* button container */}
      <div className="flex justify-center items-center bg-white">
        <div className="p-5 space-x-6">
          {FakeCategories.map((fakeCategory, index) => (
            <CustomButton
              key={index}
              text={fakeCategory}
              value={fakeCategory}
              setValue={handleCategory}
              active = { fakeCategory ? category === fakeCategory : false}
            />
          ))}
        </div>
      </div>
      {/* item container */}
      <div className="w-full flex flex-row p-2 mx-auto flex-wrap justify-center gap-6">{ProductList()}</div>
    </div>
  );
};

export default ShopItemContainer;
