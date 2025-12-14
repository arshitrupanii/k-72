import React from "react";
import { Link } from "react-router-dom";

const HeroButton = ({ text, link }) => {
  return (
    <Link to={link} className="border-4 text-[5vw] uppercase rounded-full font-[Lausanne-500] px-16 pt-3 leading-tight hover:text-[#d3fd50]">
      {text}
    </Link>
  );
};

export default HeroButton;