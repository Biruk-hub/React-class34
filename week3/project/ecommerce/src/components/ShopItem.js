import React from "react";

const ShopItem = ({ data }) => {
  return (
    <div className="block lg:w-1/5 md:w-1/3 h-auto p-4 w-full bg-white rounded-md overflow-hidden">
      <div className="w-full h-80">
        <img
          alt={data.title}
          className="object-fill object-center w-full h-full block"
          src={data.image}
        />
      </div>
      <div className="mt-4 ">
        <h3 className="text-xs tracking-widest title-font mb-1 text-blue-400">
          {data.category}
        </h3>
        <div className="h-28 overflow-hidden">
          <h2 className="title-font text-lg font-medium text-gray-800">{data.description}</h2>
        </div>
        <p className="mt-1 text-blue-600">$ {data.price}</p>
      </div>
    </div>
  );
};

export default ShopItem;
