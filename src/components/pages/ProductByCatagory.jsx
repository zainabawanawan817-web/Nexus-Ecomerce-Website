import React from 'react'
import { Videos } from '../Context/Data'
import {items} from '../Context/Data.js'
import Products from '../common/Products.jsx'
import VedioPlayer from '../common/VedioPlayer.jsx'
import { useLocation, useParams } from 'react-router'



const ProductByCatagory = () => {
  const {cat}= useParams();
  const vediobycat=Videos.find((item)=>item.category.toLowerCase()===cat.toLowerCase());
  console.log(vediobycat);
  const productbycatagory=items.filter((item)=>item.category.toLowerCase()===cat.toLowerCase());
  return (
    <div>
      <VedioPlayer src={vediobycat.url} />
      <Products items={productbycatagory}/>
    </div>
  )
}

export default ProductByCatagory