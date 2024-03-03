import ReviewDescription from "../Components/ReviewDescription"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container"> 
      <h1 className="font-palanquin text-center text-4xl font-bold">
      What our  <span className="text-coral-red">Customer</span> Say?
      </h1>
      <p className="info-text mt-4  text-center max-lg:text-[20px]">Hear genuine stories from our Customers sharing about their exceptional experiences</p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
         {reviews.map((review)=>(
               <ReviewDescription
               key={review.customerName}
               imgURL={review.imgURL}
               customerName={review.customerName}
               rating={review.rating}
               feedback={review.feedback}/>
         ))}
      </div>
     

    </section>
  )
}

export default CustomerReviews