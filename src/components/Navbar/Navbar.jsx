import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo } from "../../assets";


const Menu = () => (
  <>
    <p className="font-poppins text-white text-lg font-medium capitalize sm:my-0 my-4 sm:mx-4 mx-0 cursor-pointer">
      <a href="#home">Home</a>
    </p>
    <p className="font-poppins text-white text-lg font-medium capitalize sm:my-0 my-4 sm:mx-4 mx-0  cursor-pointer">
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p className="font-poppins text-white text-lg font-medium capitalize sm:my-0 my-4 sm:mx-4 mx-0  cursor-pointer">
      <a href="#possibility">Open AI</a>
    </p>
    <p className="font-poppins text-white text-lg font-medium capitalize sm:my-0 my-4 sm:mx-4 mx-0  cursor-pointer">
      <a href="#features">Case Studies</a>
    </p>
    <p className="font-poppins text-white text-lg font-medium capitalize sm:my-0 my-4 sm:mx-4 mx-0  cursor-pointer">
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 pt-16 sm:py-24">
      <div className="flex-1 flex justify-start items-center">
        <div className="mr-8 ">
          <img src={logo} alt="logo" className="w-[63px] h-[17px] " />
        </div>
        <div className="hidden lg:flex flex-row ">
          <Menu />
        </div>
      </div>
      <div className="hidden sm:flex justify-end items-center">
        <p className="font-poppins text-white text-lg font-medium capitalize my-0 mx-4 cursor-pointer">
          Sign in
        </p>
        <button
          type="button"
          className="py-2 px-4 bg-[#ff4820] text-[#fff] text-lg font-poppins font-medium rounded-[5px] border-0 outline-0 cursor-pointer "
        >
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu lg:hidden ml-4 relative cursor-pointer">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container flex justify-end items-end text-center flex-col bg-footer shadow-[0_0_5px_rgba(0,0,0,0.2)] p-8 absolute top-[20px] right-0 min-w-[210px] rounded-[5px] mt-4 scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign sm:hidden flex justify-end items-center">
                <p className="font-poppins text-white sm:text-lg text-2 font-medium capitalize sm:my-0 sm:mx-4 mr-2 cursor-pointer">
                  Sign in
                </p>
                <button
                  type="button"
                  className="py-2 px-4 bg-[#ff4820] text-[#fff] text-2 font-poppins font-medium rounded-[5px] border-0 outline-0 cursor-pointer "
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
