import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const ShopItem = ({ data }) => {
  return (
    <div className="relative block lg:w-1/5 md:w-1/3 h-auto  w-full p-4 bg-white hover:border-blue-400 hover:border-2 rounded-md overflow-hidden">
      <Link to={`/product/${data.id}`}>
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
            <h2 className="title-font text-lg font-medium text-gray-800">
              {data.description}
            </h2>
          </div>
          <p className="mt-1 text-blue-600">$ {data.price}</p>
        </div>
      </Link>
      <div className="absolute top-2 right-2">
        <FavoriteIcon id={data.id}/>
      </div>
    </div>
  );
};

export default ShopItem;
