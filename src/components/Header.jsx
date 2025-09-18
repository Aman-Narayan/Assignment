import React from "react";
import { CartURL, LogoURL } from "../utils/constant";

const Header = () => {
  return (
    <div className="flex items-center justify-between mr-2 ml-2">
      <div className="flex items-center">
        <img className="h-20" src={LogoURL} alt="Logo" />
        <h1 className="font-bold text-xl ml-[-35px] mt-[-5px]">E-Comm</h1>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <h1>HOME</h1>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <h1>BAG</h1>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <h1>SNEAKERS</h1>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <h1>BELT</h1>
      </div>
      <div className="hover:text-blue-500 cursor-pointer">
        <h1>CONTACT</h1>
      </div>
      <div className="flex items-center hover:text-blue-500 cursor-pointer">
        <img src={CartURL} alt="cart" className="h-10" />
        <h1 className="m-2">items</h1>
        <p>$0.00</p>
      </div>
    </div>
  );
};

export default Header;
