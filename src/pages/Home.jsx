import React from 'react'
import Video from "../components/Video"
import HomeHeroText from "../components/HomeHeroText"
import HomeBottomBtn from "../components/HomeBottomBtn"

const home = () => {
  return (
    <div className='text-white'>
        {/* video */}
        <div className="w-screen h-screen fixed">
            <Video/>
        </div>

        {/* Texts */}
        <div className="w-screen h-screen relative">  
            <HomeHeroText />
            <HomeBottomBtn />
        </div>
    </div>
  )
}

export default home