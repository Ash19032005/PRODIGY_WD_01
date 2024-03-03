import Button from "../Components/button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10">
           <div className="max-sm:flex-col">
            <h3 className="text-4xl max-md:ml-[40px] font-palanquin font-bold">Sign up from
              <span className="text-coral-red"> Updates</span> & newsletter
            </h3>
           <div className="flex max-md:flex-col w-full  max-md:border-none mt-2 gap-5 py-1.5 px-2 w-full items-center text-[18px] border rounded-full sm:border-slate-gray justify-between border-1 border-slate-300">
            <input className="outline-none px-3 max-md:outline-slate-100 py-2 rounded-full" type="text" placeholder="Subscribe@nike.com"/>
            <div className="flex max-md:justify-center items-center max-sm:w-full">
            <Button
              label="Sign Up"/>
            </div>
            </div> 
           </div>
           
    </section>
   
  )
}

export default Subscribe