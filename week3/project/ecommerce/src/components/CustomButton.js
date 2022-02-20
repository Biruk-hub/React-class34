import React from "react";

const CustomButton = ({ text, onClick, active, noClick }) => {
  return (
    <button
      onClick={noClick ? null : () => onClick(text)}
      className={
        active
          ? "text-blue-500 bg-blue-100 text-base font-semibold py-1 px-4 rounded-full"
          : "text-gray-600 hover:bg-blue-100 text-base font-semibold py-1 px-4 rounded-full"          
      }
    >
      <span className="">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
