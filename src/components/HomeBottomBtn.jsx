import React from "react";

const HomeBottomText = () => {
  return (
    <div className="absolute w-full bottom-5 flex gap-5 justify-center font-[Lausanne-500]">
      
      <a
        href="#"
        className="uppercase hover:text-[#d3fd50] text-[5.5vw] px-10 py-4 border-4 rounded-full inline-block"
      >
        Projects
      </a>

      <a
        href="#"
        className="uppercase hover:text-[#d3fd50] text-[5.5vw] px-10 py-4 border-4 rounded-full inline-block"
      >
        Agence
      </a>

    </div>
  );
};

export default HomeBottomText;
