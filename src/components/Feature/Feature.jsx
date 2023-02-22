import React from "react";


const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature w-full flex justify-between items-start flex-col md:m-4 my-4 lg:my-0 ">
      <div className="gpt3__features-container__feature-title flex-1 max-w-[180px] mr-8 ">
        <div className="w-[38px] h-[3px] bg-subtext mb-1 " />
        <h1 className="font-poppins font-bold text-[24px] text-[#fff] ">
          {title}
        </h1>
      </div>
      <div className="gpt3__features-container__feature-text flex-2 max-w-[390px] flex ">
        <p className='font-poppins font-medium text-[14px] text-text '>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
