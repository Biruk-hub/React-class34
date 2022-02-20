import React from "react";

const CustomLoading = ({text = 'Loading...'}) => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-gray-500">{text}</span>
    </div>
  );
};

export default CustomLoading;
