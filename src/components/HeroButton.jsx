import React from "react";
import { Link } from "react-router-dom";

const HeroButton = ({text, link}) => {
  return (
    <div className=" font-[Lausanne-500]">
      <div className="border-4 rounded-full px-16 pt-3 leading-tight hover:text-[#d3fd50]">
        <Link className="text-[5vw] uppercase" to={link}>{text}</Link>
      </div>
    </div>
  );
};

export default HeroButton;