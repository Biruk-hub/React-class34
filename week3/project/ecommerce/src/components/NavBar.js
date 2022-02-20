import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <CustomButton text="Products" noClick={true} />
      </Link>
      <Link to="/favorites">
        <CustomButton text="Favorites" noClick={true} />
      </Link>
    </div>
  );
};

export default NavBar;
