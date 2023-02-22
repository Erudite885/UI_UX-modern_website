import React from "react";
import { Feature } from "../../components";
// import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__margin bg-footer gradient__bg-what flex flex-col p-8 "
      id="wgpt3"
    >
      <div className="gpt3__whatgpt3-feature flex">
        <div className="gpt3__features-container__feature-title flex flex-col md:flex-row">
          <h1 className="font-poppins font-bold text-[24px] text-[#fff] w-full mb-4 md:mb-0 ">
            What is GPT-3
          </h1>
          <p className="font-poppins font-medium text-[14px] text-text ">
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adip Lorem
            ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet,
            consectetur adip Lorem ipsum dolor sit amet, consectetur adip. Lorem
            ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
            consectetur adip.
          </p>
        </div>
      </div>
      <div className="gpt3__whatgpt3-heading flex flex-col sm:flex-row justify-between md:items-start items-center mx-0 mt-8 mb-4 md:mb-0 ">
        <h1 className="gradient__text font-poppins font-bold text-[28px] md:text-[34px] max-w-[510px] lg:max-w-full lg:mb-8 ">
          The possibilities are beyond your imagination.
        </h1>
        <p className="font-poppins font-medium text-[16px] text-subtext cursor-pointer mt-5 md:mt-2 ">
          Explore the Library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container flex flex-col lg:flex-row mt-2 ">
        <Feature
          title="Chatbots"
          text=" Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip."
        />
        <Feature
          title="Knowledgebase"
          text=" Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip."
        />
        <Feature
          title="Education"
          text=" Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
