const Button = ({label,iconURL,backGroundColor,textColor,borderColor,width}) => {
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-3  border font-montserrat rounded-full
     ${
      backGroundColor ? `${backGroundColor} ${textColor} ${borderColor} ${width}`:'bg-coral-red text-white border-coral-red'}`}>
       {label}
     {iconURL && <img src={iconURL}
         alt="Arrow"
         className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button