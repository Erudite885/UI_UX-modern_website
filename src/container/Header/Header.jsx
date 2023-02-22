import React from "react";
import { ai_face, face, people } from "../../assets";

// import "./header.css";

const Header = () => {
  return (
    <div
      className="gpt3__header flex flex-col lg:flex-row section__padding"
      id="home"
    >
      <div className="gpt3__header-content flex-1 flex justify-center items-start flex-col mr-20">
        <h1 className="gradient__text font-poppins font-bold text-[36px] ss:text-[48px] sm:text-[62px] ">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="font-poppins text-[14px] ss:text-[16px] sm:text-[20px] text-text mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip.
        </p>

        <div className="gpt3__header-content__input sm:w-full mt-4 mb-2 mx-0 flex">
          <input
            type="email"
            className="bg-footer input__border py-0 px-4 outline-none flex-2 w-full min-h-[50px] font-poppins text-[12px] sm:text-[20px] text-text "
            placeholder="Your Email Address..."
          />
          <button
            type="button"
            className="text-[#fff] text-[12px] sm:text-[20px] font-bold font-poppins bg-[#ff4820] input__button-border w-[180px] flex-0.6 sm:min-h-[50px] cursor-pointer "
          >
            Get Started
          </button>
        </div>

        <div className="gpt3__header-content_people w-full flex flex-col sm:flex-row justify-start items-center mt-8 ">
          <img src={face} alt="" className="w-[182px] h-[38px] " />
          <p className="text-[#fff] font-medium font-poppins text-[12px] m-0 sm:ml-4 text-center">
            1,600 people requested access to visit in last 24 hours.
          </p>
        </div>
      </div>
      <div className="gpt__header-img flex-1 flex justify-center items-center ">
        <img src={ai_face} alt="" className="w-full h-full  " />
      </div>
    </div>
  );
};

export default Header;
