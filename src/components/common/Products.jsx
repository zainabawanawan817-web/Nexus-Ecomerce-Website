
import React from "react";
import { Link ,useLocation } from "react-router";
import ShopByCatagory from "./ShopByCatagory";
import { ToastContainer, toast,Bounce } from "react-toastify";
import { useContext } from "react";
import TrendingSlide from "./TrendingSlide";
import DataContext from "../Context/DataContext";
const Products = ({ items }) => {
  const{pathname}=useLocation();
  const {addToCart} = useContext(DataContext);
  return (
   <> 
    <ToastContainer/>
    {pathname==="/" && <ShopByCatagory />}
   
    <div className="w-full px-3 sm:px-5 lg:px-8">
      <div
        className="
          max-w-[1200px]
          mx-auto
          mt-8 sm:mt-12 md:mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 sm:gap-6 lg:gap-8
        "
      >
        {items.map((product) => (
          <div
            key={product.id}
            className="
              w-full
              flex
              justify-center
            "
          >
            <div
              className="
                w-full
                max-w-[360px]
                min-h-[380px]
                sm:min-h-[400px]
                md:min-h-[420px]

                flex
                flex-col
                justify-center
                items-center

                p-4 sm:p-5

                bg-slate-900
                rounded-2xl
                border
                border-gray-600

                hover:shadow-lg
                hover:shadow-white/20

                transition-transform
                duration-300
                hover:scale-[1.03]
              "
            >
              <Link
                to={`/product/${product.id}`}
                className="w-full flex justify-center"
              >
                <img
                  className="
                    w-full
                    max-w-[280px]
                    h-[180px]
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

              <div className="w-full text-center text-white mt-4">
                <p className="text-base sm:text-lg font-medium truncate">
                  {product.title}
                </p>

                <p className="text-sm sm:text-base mt-1">
                  {product.price}
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
                  onClick={() => addToCart(product.id, product.title, product.price, product.imgSrc)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {pathname==="/" && <TrendingSlide/>}
  
  </>
  );
};

export default Products;

