import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { trendingProducts } from "../Context/Data.js";
import SliderModule from "react-slick";
const Slider = SliderModule.default;
console.log(Slider);
const TrendingSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return ( 
    <>
    <div>
      <h1 className='text-2xl font-bold text-white text-center my-5'>Trending Products</h1>
      <Slider {...settings}>
        
        {trendingProducts.map((product,index) => (
          <div key={index} className="flex justify-center items-center w-auto h-auto4  my-4">
            <img src={product.image} alt={product.name} className="rounded-2xl" style={{ width: "180px", height: "180px" }} />
           
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default TrendingSlide