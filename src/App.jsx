import React from 'react'
import { BrowserRouter, Router, Routes,Route } from 'react-router'
import AllProducts from './components/common/AllProducts.jsx'
import Cart from './components/pages/Cart.jsx'
import Products from './components/common/Products.jsx'
import ProductByCatagory from './components/pages/ProductByCatagory.jsx'
import ProductDetails from './components/pages/ProductDetails.jsx'
import SearchProduct from './components/pages/SearchProduct.jsx'
import Navbar from './components/common/Navbar.jsx'
import TrendingSlide from './components/common/TrendingSlide.jsx'




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/catagory/:cat" element={<ProductByCatagory/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/product/search/:term" element={<SearchProduct/>}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App