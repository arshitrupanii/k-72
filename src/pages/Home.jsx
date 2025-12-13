import React from 'react'
import Video from "../components/Video"
import HomeHeroText from "../components/HomeHeroText"
import HomeBottomText from "../components/HomeBottomText"

const home = () => {
  return (
    <div>
        {/* video */}
        <div className="w-screen h-screen fixed">
            <Video/>
        </div>

        {/*  */}
        <div className="w-screen h-screen relative">  
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
  )
}

export default home