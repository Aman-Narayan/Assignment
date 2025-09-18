import React from "react";

const Cards = ({ imgUrl }) => {
  return (
    <div className="bg-gray-200 w-[30%] mt-5 ">
      <h1 className="bg-red-600 text-white mb-[-35px] w-14 rounded-sm p-2">
        HOT
      </h1>
      <div className="flex items-center justify-center">
        <img className="w-50 h-50 rounded-lg" src={imgUrl} />
      </div>
      <div className="m-2 p-2">
        <h1 className="text-center font-bold">Nike Air Max 270 React</h1>
        <div className="flex items-center justify-center">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>✩</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-blue-500 mr-2 font-bold">$299,43</span>
          <span>
            <s className="text-gray-600 text-sm">$534,33</s>
          </span>
          <span className="ml-2 text-red-600 font-bold">24% Off</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
