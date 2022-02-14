import React, { useState } from "react";
import CustomButtonController from "./CustomButtonController";
import ShopItemController from "./ShopItemController";

const ShopItemContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-screen h-auto">
      <div className="flex justify-center items-center bg-white">
        <div className="mb-2 p-5 space-x-6 border-b-2 border-gray-300">
          <CustomButtonController categoryHandler={handleCategory} />
        </div>
      </div>
      <div className="bg-gray-100 w-full flex flex-row p-2 mx-auto flex-wrap justify-center gap-6">
        <ShopItemController selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default ShopItemContainer;
