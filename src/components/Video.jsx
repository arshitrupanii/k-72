const Video = () => {
  return (
    <div className='w-full h-full'>
      <video className='w-full h-full object-cover' autoPlay loop playsInline controls={false} src="src/assets/bg-video.mp4"></video>
    </div>
  )
}

export default Video