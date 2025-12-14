import React from 'react'
import Video from './Video'

const HeroText = () => {
  return (
    <div className='flex flex-col items-center font-[Lausanne-300] text-[9vw] leading-none uppercase'>
      <div>L'étincelle</div>
      <div className='flex'>
        qui
          <div className='w-[15vw] h-[7vw] rounded-full overflow-hidden'>
            <Video/>
          </div>
        génère
      </div>
      <div>lacréativité</div>      
    </div>
  )
}

export default HeroText