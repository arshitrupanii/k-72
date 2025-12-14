import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

   const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  const imgDivref = useRef(null);
  const imgref = useRef(null);

  useGSAP(function () {
    gsap.to(imgDivref.current, {
      scrollTrigger: {
        trigger: imgDivref.current,
        start: "top 25%",
        end: "top -140%",
        pin: true,
        scrub: 2.5,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        onUpdate: (ele) => {
          console.log(imgDivref.current)
          let imageIndex;
          if (ele.progress < 1) {
            imageIndex = Math.floor(ele.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imgref.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <>
    
    <div className="bg-black text-white min-h-screen relative">
      {/* img */}
      <div
        ref={imgDivref}
        className="absolute rounded-2xl overflow-hidden w-[15vw] left-[30%] z-0"
      >
        <img
          ref={imgref}
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          alt=""
        />
      </div>

      {/* text */}
      <div className="z-1 relative pt-[50vh]">
        <div className="text-[20vw] leading-none text-center font-[Lausanne-500]">
          <div>SOIXAN7E</div>
          <div>DOUZE</div>
        </div>

        {/* para */}
        <div className="flex justify-end">
          <p className="w-[50vw] text-6xl leading-none font-semibold indent-[5em]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
    </div>

    <div className="h-screen bg-black">

    </div>
    </>
  );
};

export default Agence;
