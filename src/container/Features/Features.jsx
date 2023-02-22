import React from "react";
import {Feature} from '../../components'
// import "./features.css";

const featuresData = [
  {
    title: "LOREM IPSU",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    title: "LOREM IPSU",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    title: "LOREM IPSU",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    title: "LOREM IPSU",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding w-full flex items-center justify-between flex-col lg:flex-row ">
      <div className="gpt3__features-heading flex-1 flex justify-end items-start flex-col text-left lg:mr-0 ">
        <h1 className="gpt3__features gradient__text font-poppins font-bold text-[35px] lg:w-4/5  ">
          The Future is Now and You Just Need To Realize It. Step into the
          Future Today & Make it Happen.
        </h1>
        <p className="gpt3__features text-subtext font-poppins font-medium text-[14px] my-4  ">
          Request Early Access to get Started
        </p>
      </div>
      <div className="gpt3_features-container flex-1 flex flex-col md:flex-row justify-start ">
        {featuresData.map((item, i) => (
          <Feature title={item.title} text={item.text} key={item.title + i} />
        ))}
      </div>
    </div>
  );
};

export default Features;
