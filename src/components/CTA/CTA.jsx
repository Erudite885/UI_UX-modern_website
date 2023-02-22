import React from "react";
// import "./cta.css";

const CTA = () => {
  return (
    <div className="gpt3__cta flex justify-between items-center flex-col sm:flex-row p-2 m-4 rounded-xl gradient__cta ">
      <div className="gpt3__cta-content flex flex-col justify-center items-start">
        <p className="gpt3__cta-content-p font-poppins font-medium text-[12px] text-[#0e0e0e] md:px-4 my-4 capitalize">request early access</p>
        <h3 className="gpt3__cta-content font-poppins text-[24px] font-bold px-4 mb-8 ">
          Register today & start exploring the endless possibilities
        </h3>
      </div>
      <div className="gpt3__cta-btn flex justify-center items-center sm:ml-8 ">
        <button type="button" className="gpt3__cta-btnbtn bg-black font-bold font-poppins py-2 px-4 border-0 outline-none rounded-[40px] text-[18px] text-white cursor-pointer min-w-[150px] capitalize">
          get started
        </button>
      </div>
    </div>
  );
};

export default CTA;
