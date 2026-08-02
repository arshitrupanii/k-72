import Video from './Video'

const HeroText = () => {
  return (
    <h1 className="m-0 flex flex-col items-center text-center text-[clamp(3.5rem,15vw,6rem)] font-light uppercase leading-[.88] tracking-[-.06em] md:text-[clamp(4.2rem,8vw,9rem)] md:leading-[.84]">
      <span className="flex items-center whitespace-nowrap">L’étincelle</span>
      <span className="flex items-center gap-[.08em] whitespace-nowrap md:gap-[.15em]">
        qui
        <span className="h-[.75em] w-[1.2em] overflow-hidden rounded-full md:w-[1.7em]"><Video /></span>
        génère
      </span>
      <span className="flex items-center whitespace-nowrap">la créativité</span>
    </h1>
  )
}

export default HeroText
