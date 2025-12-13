import React from 'react'
import Video from './Video'

const HeroText = () => {
  return (
    <div className='flex flex-col items-center font-[Lausanne-300]'>
      <div className='text-[9vw] leading-none uppercase'>L'étincelle</div>
      <div className='text-[9vw] leading-none uppercase flex'>
        qui
          <div className='w-[15vw] h-[7vw] rounded-full overflow-hidden'>
            <Video/>
          </div>
        génère
      </div>
      <div className='text-[9vw] leading-none uppercase'>lacréativité</div>      
    </div>
  )
}

export default HeroText