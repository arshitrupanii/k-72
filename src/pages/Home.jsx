import React from "react";
import Video from "../components/Video";
import HeroText from "../components/HeroText";
import HeroButton from "../components/HeroButton";

const home = () => {
  return (
    <>
      {/* video background it fixed */}
      <div className="min-w-screen h-screen fixed">
        <Video />
      </div>

      {/* menu */}
      {/* <div className="absolute right-0 top-0 w-[15vw] h-[6vh] bg-black"> */}

      {/* page start from here */}
      {/* home page Texts */}
      <div className="w-screen min-h-screen relative flex flex-col justify-between text-white">

        {/* main heading */}
        <HeroText />

        {/* middle text */}
        <div className="w-screen flex justify-end">
          <p className="w-[20vw] max-h-[20vh] overflow-hidden text-sm">
            K72 est une agence qui pense chaque action pour nourrir la marque.
            Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
            l'étincelle pour générer de l'émotion. Pour assurer une relation
            honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
            qui doit être fait.
          </p>
        </div>

        {/* this is bottom btn */}
        <div className="flex justify-center gap-10 mb-3">
          <HeroButton text={"Projects"} link={"/projects"} />
          <HeroButton text={"Agence"} link={"/agence"} />
        </div>
      </div>
    </>
  );
};

export default home;
