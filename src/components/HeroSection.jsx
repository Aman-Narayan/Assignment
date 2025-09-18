import React from "react";

const HeroSection = () => {
  return (
    <div className="mainDiv flex justify-between">
      <div className="LeftDiv w-[20%] m-2">
        <div className="HotDeals bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="font-medium m-2">Hot Deals</h1>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike</span>
            <span>1</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Airmax</span>
            <span>48</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike New</span>
            <span>14</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Addidas</span>
            <span>15</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Vans</span>
            <span>23</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>All Star</span>
            <span>1</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Addidas New</span>
            <span>95</span>
          </div>
        </div>
        <div className="PriceRange bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="mb-2 font-medium">PRICES</h1>
          <div className="mb-2">
            <span>Ranger: </span>
            <span>$13.99-$25.99 </span>
          </div>
          <div>
            <input className="w-full" type="range" />
          </div>
        </div>

        <div className="Color bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="mb-2 font-medium">COLOR</h1>
          <div className="flex justify-between">
            <div className="Colors w-4 h-4 bg-red-800 rounded-full border-red-400"></div>
            <div className="Colors w-4 h-4 bg-blue-700 rounded-full border-blue-400"></div>
            <div className="Colors w-4 h-4 bg-black rounded-full border-white"></div>
            <div className="Colors w-4 h-4 bg-yellow-500 rounded-full border-yellow-400"></div>
            <div className="Colors w-4 h-4 bg-pink-400 rounded-full border-pink-400"></div>
            <div className="Colors w-4 h-4 bg-gray-400 rounded-full border-gray-400"></div>
          </div>
        </div>

        <div className="BANDS bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="font-medium m-2">BRANDS</h1>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Vans</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Adidas</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Siemens</span>
            <span>15</span>
          </div>
        </div>

        <div className="Color bg-gray-200 flex-col mb-5 w-[80%] p-2 rounded-sm">
          <h1 className="mb-2 font-medium text-center">More</h1>
        </div>
      </div>
      <div className="rightDiv w-[65%]"></div>
    </div>
  );
};

export default HeroSection;
