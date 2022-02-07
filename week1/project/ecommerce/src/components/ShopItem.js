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

/* 
id: 1,
    title: "FAKE: Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
*/
