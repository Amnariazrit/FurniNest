

'use client';
import React from 'react'
import Image from 'next/image'
import IProducts from '../types/Product';
import Link from 'next/link';




export default function ProductList ({products}:{products:IProducts[]}) {
   
    const handleClick = (product: IProducts) => {
        const cart = JSON.parse (localStorage.getItem('cart') || '{}')
        if(cart[product.title]){
          cart[product.title] = {...cart[product.title], quantity: cart[product.title].quantity + 1
          }
          }else{
            cart[product.title] = {...product, quantity: 1}
          }
        localStorage.setItem('cart', JSON.stringify(cart))
      }
  return (
    <div>
         <div className="bg-gray-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <Link href={`/Product/${product.title}`}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            /></Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {product.title}
              </h2>
              {product.isNew && (
                <span className="text-sm text-green-500 font-medium">
                  New Arrival
                </span>
              )}
              <p className="text-gray-500 text-sm mt-2">
                {product.description.slice(0, 60)}...
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </p>
                {product.discountPercentage > 0 && (
                  <span className="text-sm text-red-500">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button onClick={()=>handleClick(product)}  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    );  }


