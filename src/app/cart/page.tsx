"use client";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../action/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.quantity + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1)
      handleQuantityChange(id, product.quantity - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your Order has been successfully processed",
          "success"
        );
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                alt=""
                className="w-16 h-16 object-cover rounded-lg"
                width={500}
                height={500}
              />
            )}
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-4">
              Price: ${item.price.toFixed(2)}
            </p>
            <div className="flex items-center justify-between">
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <span className="px-2 text-lg font-semibold">
                  {item.quantity}
                </span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow-sm">
          <h2 className="text-xl font-semibold">Cart Summary</h2>
          <p className="text-lg font-medium mt-2">
            Total: ${calculatedTotal().toFixed(2)}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleProceed}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      {cartItems.length === 0 && (
        <p className="text-center text-lg text-gray-500 mt-6">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default CartPage;

// 'use client'
// import React, { useEffect, useState } from 'react'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../action/actions'
// import Swal from 'sweetalert2'

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState<Product[]>([])
//     useEffect(()=>{
//        setCartItems(getCartItems())
//     },[]
//   )
// const handleRemove =(id:string)=>{
//   Swal.fire({
//     title:"Are you sure?",
//     text:"You will not be able to recover this item",
//     icon:"warning",
//     showCancelButton: true,
//     confirmButtonColor:"#3085d6",
//     cancelButtonColor:"#d33",
//     confirmButtonText:"Yes,remove it!"

//   }).then((result)=>{
//     if(result.isConfirmed){
//       removeFromCart(id)
//     }setCartItems(getCartItems())
//     Swal.fire("Removed!","Item has been removed.","success")
//   })
// }

// const handleQuantityChange = (id:string, quantity:number)=>{
//   updateCartQuantity(id,quantity);
//   setCartItems(getCartItems())
// }

// const handleIncrement=(id:string)=>{
//   const product = cartItems.find((item)=> item._id === id);
//   if(product)
//     handleQuantityChange(id,product.quantity + 1)
// }

// const handleDecrement=(id:string)=>{
//   const product = cartItems.find((item)=> item._id === id);
//   if(product && product.quantity > 1)
//     handleQuantityChange(id,product.quantity - 1)
// }

// const calculatedTotal = ()=>{
//   return cartItems.reduce((total,item)=>total + item.price * item.quantity,0)
// };

// const handleProceed =()=>{
//   Swal.fire({
//     title:"Proceed to Checkout?",
//     text:"Please review your cart before checkout",
//     icon:"question",
//     showCancelButton:true,
//     confirmButtonColor:"#3085d6",
//     cancelButtonColor:"#d33",
//     confirmButtonText:"Yes,proceed!"
//   }).then((result)=>{
//     if(
//       result.isConfirmed
//     ){
//       Swal.fire("success","Your Order has been successfully processed","success")
//       setCartItems([])
//     }
//   })
// }

//   return (
//     <div className=''>

//     </div>
//   )
// }

// export default CartPage
