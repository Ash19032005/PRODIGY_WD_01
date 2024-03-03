import { star } from "../assets/icons"
const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
       <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
    <div className="mt-8 flex justify-start gap-2.5">
       <img src={star} alt="rating" width={24} height={24}/>
       <p className="fonts-montserrat  text-slate-gray text-xl">4.5</p>
    </div>
    <h3 className="mt-2 leading-normal font-palanquin font-semibold text-2xl">{name}</h3>
    <p className="leading-normal mt-2 font-montserrat font-semibold text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductsCard