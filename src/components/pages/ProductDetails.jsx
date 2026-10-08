import React from 'react'
import { useParams } from 'react-router'
import { items } from '../Context/Data.js'
import Products from '../common/Products.jsx'
import { useContext } from 'react';
import DataContext from '../Context/DataContext.jsx';
const ProductDetails = () => {
  const {addToCart} = useContext(DataContext);
  const{id}=useParams();
  const products=items.find((item)=>item.id==id);
  const relatedpro=items.filter((item)=>item.category.toLowerCase()===products.category.toLowerCase());
  
  return (
   <>
    <div className='w-full max-w-[60%] m-auto px-3 mt-5 py-5 sm:px-5 lg:px-8 flex flex row 
               bg-slate-900
                rounded-2xl
                border
                border-gray-600

                hover:shadow-lg
                hover:shadow-white/20

                transition-transform
                duration-300
                hover:scale-[1.03]
               gap-5 sm:gap-6 lg:gap-8 '>
       <div>
                  <img
                  className="
                    w-full
                    max-w-[280px]
                    h-[250px]
                    sm:h-[200px]
                    md:h-[210px]

                    

                    rounded-2xl
                    border
                    border-gray-600
                  "
                  src={products.imgSrc}
                  alt={products.title}
                />
     
      </div>
      <div className="w-full text-center flex flex-col justify-center items-center text-white mt-4">
                <p className="text-base sm:text-lg font-medium truncate">
                  {products.title}
                </p>

                <p className="text-sm sm:text-base mt-1 text-yellow-500">
                  ${products.price}
                </p>
                <p className="text-sm sm:text-base my-2 font-bold">
                  ${products.description}
                </p>

                <button
                  className="
                    mt-3
                    w-full
                    max-w-[150px]

                    px-3 py-2
                    sm:px-5 sm:py-3

                    bg-gradient-to-r
                    from-sky-700
                    to-sky-300

                    text-black
                    font-bold

                    rounded-xl

                    border
                    border-transparent

                    hover:opacity-80
                    hover:border-white

                    transition
                  "
                  onClick={() => addToCart(products.id, products.title, products.price, products.imgSrc)}
                >
                  Add To Cart
                </button>
        </div>
     
    </div>
    <div className='my-5'>
      <h1 className='text-white text-3xl font-bold mb-3 text-center mt-10'>Related Products</h1>
      <Products items={relatedpro} />
    </div>
  </>
  )
}

export default ProductDetails