// import React from 'react';

// interface ProductDetailsProps {
//   product: {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//     inStock: boolean;
//     colors?: string[];
//     sizes?: string[];
//   };
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
//       {/* Product Image */}
//       <div className="flex justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-96 h-96 object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="mt-6">
//         <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//         <p className="text-lg text-gray-600 mt-2">{product.description}</p>
//         <p className="text-xl font-semibold text-blue-600 mt-4">
//           Price: ${product.price}
//         </p>
//         <p
//           className={`text-md font-medium mt-2 ${
//             product.inStock ? 'text-green-600' : 'text-red-600'
//           }`}
//         >
//           {product.inStock ? 'In Stock' : 'Out of Stock'}
//         </p>

//         {/* Sizes */}
//         {product.sizes && (
//           <div className="mt-4">
//             <h3 className="font-semibold text-gray-700">Available Sizes:</h3>
//             <div className="flex space-x-2 mt-2">
//               {product.sizes.map((size) => (
//                 <span
//                   key={size}
//                   className="border rounded px-3 py-1 text-sm text-gray-600 bg-gray-100"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Colors */}
//         {product.colors && (
//           <div className="mt-4">
//             <h3 className="font-semibold text-gray-700">Available Colors:</h3>
//             <div className="flex space-x-2 mt-2">
//               {product.colors.map((color) => (
//                 <div
//                   key={color}
//                   className="w-8 h-8 rounded-full border"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
