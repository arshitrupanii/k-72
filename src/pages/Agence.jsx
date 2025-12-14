import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)


  const imgDivref = useRef(null)
  const imgref = useRef(null)

  useGSAP(function(){

    gsap.to(imgDivref.current, {
      scrollTrigger: {
        trigger: imgDivref.current,
        markers : true,
        start : "top 20%",
        end : "top -70%",
        pin: true,

      }
    })
  })

  return (
    <div className='text-black min-h-screen relative'>

      {/* img */}
      <div ref={imgDivref} className='absolute rounded-2xl overflow-hidden w-[15vw] left-[30%] top-[30%] z-0'>
        <img ref={imgref} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>

      {/* text */}
      <div className='absolute top-[50%] z-1'>

        <div className='text-[20vw] leading-none text-center font-[Lausanne-500]'>
          <div>SOIXAN7E</div>
          <div>DOUZE</div>
        </div>
        
        {/* para */}
        <div className='flex justify-end'>
          <p className='w-[50vw] text-6xl leading-none'>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Agence