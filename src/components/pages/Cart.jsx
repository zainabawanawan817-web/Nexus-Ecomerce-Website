import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/DataContext.jsx'
import {Link} from 'react-router'
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast,Bounce } from "react-toastify";
const Cart = () => {
  const {cart,setcart}=useContext(DataContext);
  const {removefromcart}=useContext(DataContext);
  console.log(cart);
  return (
    <>
     <ToastContainer/>
      <div >
       {cart.length ===0 ? (
        <div className='w-full max-w-[60%] m-auto px-3 mt-5 py-5 sm:px-5 lg:px-8 flex flex-col justify-center items-center'>
           <h1 className='text-center text-2xl font-bold text-white mt-5'>Your Cart Is Empty</h1>
           <Link to={"/"} className=' text-center mt-5 p-2 rounded font-[600] bg-gradient-to-r from-sky-700  to-sky-300 text-black'>
             Continue Shopping
           </Link>
        </div>
       ):(
        <div className='w-full max-w-[100%] m-auto px-3 mt-5 py-5 sm:px-5 lg:px-8 flex flex-col justify-center items-center gap-5'>
          <div>
            {cart.map((product)=>(
              <div key={product.id} className='w-full max-w-[100%] m-auto px-3 mt-5 py-5 sm:px-5 lg:px-8 flex flex row relative
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
                <div className='w-full flex justify-center items-center '>
                 <Link
                     to={`/product/${product.id}`}>
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
                  src={product.imgSrc}
                  alt={product.title}
                  />
                     </Link>
                  
                  <div className="absolute top-2 right-2">
                    <button className="text-2xl bg-red-500 text-white py-1 px-3 rounded" 
                    onClick={() => removefromcart(product.id)}>
                    <MdDeleteForever />
                    </button>
                    </div>
                </div>
                 <div className="w-full text-center flex flex-col justify-center items-center text-white mt-4">
                <p className="text-base sm:text-lg font-medium truncate">
                  {product.title}
                </p>

                <p className="text-sm sm:text-base mt-1 text-yellow-500">
                  ${product.price}
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
                 
                >
                  Buy Now
                </button>
          </div>
              </div>
            )


            )}
          </div>
        </div>
       )}
      </div>
    </>
  )
}

export default Cart