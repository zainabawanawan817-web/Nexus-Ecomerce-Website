import React from 'react'
import { useParams } from 'react-router'
import {items} from '../Context/Data.js'
import Products from '../common/Products.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'

const SearchProduct = () => {
  const {term}=useParams();
  console.log(term);
  const searchResult=items.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  return (
    <div>
      <Products items={searchResult} />
    </div>
  )
}

export default SearchProduct