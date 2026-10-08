import React from "react";
import DataContext from "./DataContext";
import { items } from "./Data";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const DataState = (props) => {
  const [products, setproduct] = useState(items);
  const [cart, setcart] = useState([]);
  const addToCart = (id, title, price, imgSrc) => {
    const obj = { id, title, price, imgSrc };
    toast.success("Item added to cart successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setcart([...cart, obj]);
    console.log(cart);
  };
  const removefromcart = (id) => {
    setcart(cart.filter((p) => p.id !== id));
    toast.success("Item removed from cart successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <DataContext.Provider
      value={{ products, setproduct, cart, setcart, addToCart, removefromcart }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
