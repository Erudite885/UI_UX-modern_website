import React from "react";
import { people } from "../../assets";
// import "./possibility.css";

const Possibility = () => {
  return (
    <div
      className="gpt3__possibility section__padding flex flex-col md:flex-row justify-between items-center justify-between items-center "
      id="possibility"
    >
      <div className="gpt3__possibility-img flex-1 flex items-center justify-start md:mr-10 ">
        <img src={people} alt="possibility image" className="w-full h-full" />
      </div>
      <div className="gpt3__possibility-content flex-1 flex flex-col justify-end items-start lg:ml-10 ">
        <h4 className="gpt3__possibility-img font-poppins font-medium text-[16px] my-5 lg:my-0 capitalize text-text ">
          request early access to get started
        </h4>
        <h1 className="gpt3__possibility-contenthead font-poppins font-bold text-[32px] mb-2 lg:mb-0 gradient__text ">
          The Possibility are beyond your imagination
        </h1>
        <p className="gpt3__possibility-img font-poppins text-[16px] mb-8 capitalize text-text ">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <h4 className="gpt3__possibility-img font-poppins font-medium text-[16px] capitalize text-subtext ">
          request early access to get started
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
