import Video from './Video'

const HeroText = () => {
  return (
    <h1 className="hero-title">
      <span>L’étincelle</span>
      <span className="hero-title__middle">
        qui
        <span className="hero-title__video"><Video /></span>
        génère
      </span>
      <span>la créativité</span>
    </h1>
  )
}

export default HeroText
