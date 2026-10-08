import React, { useState } from 'react'
import { FaSearch ,} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { Link, useNavigate } from 'react-router';
import {useContext} from 'react';
import DataContext from '../Context/DataContext.jsx';


const Navbar = () => {
  const {cart}=useContext(DataContext);
  const [Term, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/product/search/${Term}`);
    setSearchTerm("");
  }

  return (
    <nav className='w-[90%] py-3 md:p-5  mt-4 md:mx-auto mx-3 flex flex-row justify-between md:px-10 p-3 items-center bg-[#1a233c] border border-gray-600 rounded-3xl'>
       
        <Link to={"/"} className='flex flex-row justify-center items-center'>
          <p className='w-10 h-10 p-2 bg-gradient-to-r from-sky-700  to-sky-300 rounded-[50%] text-center font-bold'>N</p>
          <p className='ml-2 text-white font-bold text-2xl'>Nexus</p>
          </Link>
         
        <form className='lg:mx-10 mx-5 flex-1   md:flex hidden' onSubmit={handleSearch}>
          <input value={Term} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search' className='  w-full h-5 p-5 text-white border-1 border-gray-500 rounded-2xl' />
          <button className='bg-transparent text-sky-300 text-[1.2rem] relative top-[3px] -left-[30px] '><FaSearch /></button>
        </form>
        <ul className="md:flex hidden flex-row gap-5 text-white text-500 mr-4 ">
         { ["Mobiles","Laptops","Tablets","Watches"].map((catagory)=>(
          <li key={catagory} className='hover:font-bold hover:text-sky-300 hover:-translate-y-[2px]' >
            <Link to={`/product/catagory/${catagory}`} >
              {catagory}
            </Link>
          </li>
         ))}
        </ul>
        <div className=' rounded-[50%] border p-2 text-white text-2xl font-bold border-white relative hover:-translate-y-[2px]  '>
        
          <Link to={"/cart"}>
            <IoCartOutline/>
            
          </Link>
          {cart.length>0 &&
           <p className=' w-4 h-4 absolute -top-[10px] right-1 text-[12px] bg-sky-300 text-center text-black rounded-[50%] '>
            {cart.length}
            </p>
            }
        </div>
      
       
       
    </nav>
  )
}

export default Navbar