import {products} from'../constants';
import PopularProductsCard from '../Components/PopularProductsCard';
const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'> Popular</span> Products</h2>
        <p className='text-slate-gray font-montserrat lg:max-w lg mt-2'>The Nike shoe combines innovative
           design with unparalleled performance, making it an essential 
           choice for athletes and sneaker enthusiasts alike. Crafted with cutting-edge technology and premium materials, this shoe delivers maximum comfort, durability, and style.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product)=>(
          <PopularProductsCard key={product.name} imgURL={product.imgURL} name={product.name} price={product.price}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts