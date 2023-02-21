import React from "react";
import { Feature } from "../../components";
// import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__margin bg-footer gradient__bg-what flex flex-col p-8 "
      id="wgpt3"
    >
      <div className="gpt3__whatgpt3-feature flex ">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading flex flex-col md:flex-row justify-between md:items-start items-center mx-0 mt-8 mb-4 md:mb-0 ">
        <h1 className="gradient__text font-poppins font-bold text-[28px] md:text-[34px] max-w-[510px] ">
          The possibilities are beyond your imagination.
        </h1>
        <p className="font-poppins font-medium text-[16px] text-subtext cursor-pointer mt-5 md:mt-2 ">
          Explore the Library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container flex flex-wrap flex-row mt-2 ">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatGPT3;
