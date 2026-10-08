import React from "react";
import {useContext} from "react";
import DataContext from "../Context/DataContext.jsx";
import DataState from "../Context/DataState.jsx";
import { items } from '../Context/Data.js'
const catagories = [{ name: "All" }, { name: "Mobiles" }, { name: "Laptops" }, { name: "Tablets" }, { name: "Watches" }];
const ShopByCatagory = () => {
  const { products,setproduct } = useContext(DataContext);
  
  const catagoryProducts = (category) =>{
    if (category==="All"){
      setproduct(items);
      return;
    }
    setproduct(
      items.filter((item) => item.category.toLowerCase()=== category.toLowerCase())
    );
  }
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between px-3 sm:px-5 lg:px-8 mt-10 sm:mt-[60px]">
        <div>
          <h3 className="text-3xl sm:text-3xl font-bold text-white ">
            Explore the catalog
          </h3>
          <p className="text-gray-400 mt-1">
            Filter by category to find your perfect device.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          {catagories.map((catagory, index) => (
            <div
              key={index} onClick={()=>catagoryProducts(catagory.name)}
              className="px-3 py-2 sm:px-3 sm:py-1  w-auto h-auto mt-3 bg-slate-900 rounded-2xl flex justify-center items-center text-[16px] font-500 text-gray-400 cursor-pointer hover:text-white active:bg-gradient-to-r from-sky-800 active:text-black active:font-[500]  to-sky-300 border border-gray-600  transition-transform duration-300 hover:scale-[1.03]"
            >
              {catagory.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByCatagory;
