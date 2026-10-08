import React, { use, useContext } from 'react'
import DataContext from '../Context/DataContext.jsx'
import Products from './Products.jsx';
import VedioPlayer from './VedioPlayer.jsx'
const AllProducts = () => {
  const {products}=useContext(DataContext);
 
  return (
    <>
       <VedioPlayer  src="/mobileVedio.mp4" /> 

       <Products items={products}/>
    </>
   
  )
}

export default AllProducts