import React from "react";

const CustomButton = ({ text, value, setValue, active }) => {
  return (
    <button
      onClick={() => setValue(value)}
      className={
        active
          ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          : "text-gray-800 hover:text-blue-500 font-bold py-2 px-4 "
      }
    >
      <span className="text-xl">
        <i className="fas fa-plus">{text}</i>
      </span>
    </button>
  );
};

export default CustomButton;
