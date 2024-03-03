
import Button from "../Components/button"
import { arrowRight } from "../assets/icons"
const SpecialOffer = () => {
  return (
     <section className="flex justify-center items-center ">
       <div className="flex flex-col">
      <h2 className='mt-5 font-palanquin ml-[30px] text-4xl capitalize  font-bold'>
      <span className='text-coral-red'>Special</span> Offer
        </h2>   
        <p className='mt-4  flex justify-center items-center lg:max-w-lg info-text w-full'>
        Featuring a sleek and contemporary design, the Nike Premium Quality Shoe is more than just a fashion statement—it's a symbol of sophistication and taste.
        <br/>
        <br/>
        Whether you're hitting the streets or the gym, these 
        shoes offer unmatched comfort and support, ensuring you stay at the top of your game.
        </p>
        <div className="mt-11 flex justify-center items-center flex flex-wrap gap-6">
          <Button 
          label="View details" 
          iconURL={arrowRight}
          />

        <Button
          label="Learn more"
          backGroundColor="bg-white"
          text-color="text-slate-gray"
          borderColor="text-slate-gray"
          width="px-[50px]"/>
      </div>
      
      
          </div>
     </section>
  )
}

export default SpecialOffer