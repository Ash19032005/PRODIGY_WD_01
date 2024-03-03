import Button from "../Components/button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center 
    max-lg:flex-col gap-10 max-container w-full">

      <div className="flex flex-1 flex-col">
      <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
      We Provide You <span className='text-coral-red'>Super</span>
          <br />
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>   
        <p className='mt-4 lg:max-w-lg info-text'>
        Featuring a sleek and contemporary design, the Nike 
        Premium Quality Shoe is more than just a fashion statement—it's a symbol of sophistication and taste. 
        Whether you're hitting the streets or the gym, these 
        shoes offer unmatched comfort and support, ensuring you stay at the top of your game.
        </p>
        <div className="mt-11 max-sm:flex justify-center items-center"><Button 
          label="View Details" 
          /></div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8}
        alt="shoe-8"
        height={500}
        width={570}
        className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality