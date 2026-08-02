const Video = () => {
  return (
    <div className="video-frame">
      <video
        className="video-frame__media"
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
