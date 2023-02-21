import React from "react";
import { google, dropbox, binance, atlas, airbnb } from "../../assets";

const Brand = () => {
  return (
    <div className="gpt3__brand flex flex-wrap justify-center items-center section__padding">
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
        <img src={google} alt="google logo" />
      </div>{" "}
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
        <img src={binance} alt="binance logo" />
      </div>{" "}
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
        <img src={dropbox} alt="dropbox logo" />
      </div>{" "}
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
        <img src={atlas} alt="atlas logo" />
      </div>{" "}
      <div className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
        <img src={airbnb} alt="airbnb logo" />
      </div>
    </div>
  );
};

export default Brand;
