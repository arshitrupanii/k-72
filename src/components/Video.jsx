const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        src="/bg-video.mp4"
        aria-label="Film de présentation K72"
      />
    </div>
  )
}

export default Video
