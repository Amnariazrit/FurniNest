'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import Link from "next/link";
import Swal from "sweetalert2";
import SearchFilter from "../components/SearchAndFilter"; // Import the SearchFilter component

const sanity = createClient({
  projectId: "4d6ygodw",
  dataset: "production",
  token:
    "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  discountPercentage?: number;
  isNew: boolean;
  slug: {
    _type: "slug";
    current: string;
  };
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        tags,
        discountPercentage,
        isNew,
        slug,
        "imageUrl": productImage.asset->url,
        productImage
      }`;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data);
      setFilteredProducts(data); // Initialize filtered products with all products
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
        Our Exclusive Products
      </h1>

      {/* Integrate SearchFilter component */}
      <SearchFilter
        products={products} // Pass products to the SearchFilter component
        onFilter={setFilteredProducts} // Pass the handler to update filtered products
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
          >
            <Link href={`/Product/${product.slug.current}`}>
              <div className="w-full h-48 md:h-56 lg:h-64 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </Link>
            <div className="mt-4 flex-1">
              <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-3 text-gray-800">
                <p className="font-bold">${product.price.toFixed(2)}</p>
                {product.discountPercentage && product.discountPercentage > 0 && (
                  <p className="text-sm text-green-500">
                    {product.discountPercentage}% off
                  </p>
                )}
              </div>
              {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}
            </div>
            <button
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
              hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;























// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import SearchFilter from "../components/SearchAndFilter"; // Import the SearchFilter component

// const sanity = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   token:
//     "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   tags: string[];
//   discountPercentage?: number;
//   isNew: boolean;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         tags,
//         discountPercentage,
//         isNew,
//         slug,
//         "imageUrl": productImage.asset->url,
//         productImage
//       }`;
//       const data: Product[] = await sanity.fetch(query);
//       setProducts(data);
//       setFilteredProducts(data); // Initialize filtered products with all products
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.title} added to cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
//         Our Exclusive Products
//       </h1>

//       {/* Integrate SearchFilter component */}
//       <SearchFilter
        
//         onFilter={setFilteredProducts} // Pass the handler to update filtered products
//         products={[]}      />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
//           >
//             <Link href={`/Product/${product.slug.current}`}>
//               <div className="w-full h-48 md:h-56 lg:h-64 relative">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   fill
//                   className="object-cover rounded-md"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                 />
//               </div>
//             </Link>
//             <div className="mt-4 flex-1">
//               <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
//               <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="mt-3 text-gray-800">
//                 <p className="font-bold">${product.price.toFixed(2)}</p>
//                 {product.discountPercentage && product.discountPercentage > 0 && (
//                   <p className="text-sm text-green-500">{product.discountPercentage}% off</p>
//                 )}
//               </div>
//               {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}
//             </div>
//             <button
//               className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
//               hover:scale-105 transition-transform duration-300 ease-in-out"
//               onClick={(e) => handleAddToCart(e, product)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;


























// 'use Client'
// import Link from "next/link";
// import { useState, useEffect, SetStateAction } from "react";
// import SearchFilter from "../components/SearchAndFilter"; // Import SearchFilter
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         tags,
//         discountPercentage,
//         isNew,
//         slug,
//         "imageUrl": productImage.asset->url,
//         productImage
//       }`;
//       const data: Product[] = await client.fetch(query);
//       setProducts(data);
//       setFilteredProducts(data); // Set filteredProducts initially
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>, product: Product): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
//         Our Exclusive Products
//       </h1>

//       {/* Add Search and Filter Component */}
//       <SearchFilter
//         products={products}
//         onFilter={(filtered: SetStateAction<Product[]>) => setFilteredProducts(filtered)}
//       />

//       {/* Render Filtered Products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
//           >
//             <Link href={`/Product/${product.slug.current}`}>
//               <div className="w-full h-48 md:h-56 lg:h-64 relative">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   fill
//                   className="object-cover rounded-md"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                 />
//               </div>
//             </Link>
//             <div className="mt-4 flex-1">
//               <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
//               <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="mt-3 text-gray-800">
//                 <p className="font-bold">${product.price.toFixed(2)}</p>
//                 {product.discountPercentage && product.discountPercentage > 0 && (
//                   <p className="text-sm text-green-500">
//                     {product.discountPercentage}% off
//                   </p>
//                 )}
//               </div>
//               {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}
//             </div>
//             <button
//               className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
//               hover:scale-105 transition-transform duration-300 ease-in-out"
//               onClick={(e) => handleAddToCart(e, product)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;



























// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";
// import Swal from "sweetalert2";

// const sanity = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   token:
//     "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   tags: string[];
//   discountPercentage?: number;
//   isNew: boolean;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         tags,
//         discountPercentage,
//         isNew,
//         slug,
//         "imageUrl": productImage.asset->url,
//         productImage
//       }`;
//       const data: Product[] = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.title} added to cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//     addToCart(product);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
//         Our Exclusive Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
//           >
//             <Link href={`/Product/${product.slug.current}`}>
//               <div className="w-full h-48 md:h-56 lg:h-64 relative">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   fill
//                   className="object-cover rounded-md"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                 />
//               </div>
//             </Link>
//             <div className="mt-4 flex-1">
//               <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
//               <p className="mt-2 text-sm text-gray-600 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="mt-3 text-gray-800">
//                 <p className="font-bold">${product.price.toFixed(2)}</p>
//                 {product.discountPercentage && product.discountPercentage > 0 && (
//                   <p className="text-sm text-green-500">{product.discountPercentage}% off</p>
//                 )}
//               </div>
              
//               {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}
//             </div>
//             <button
//               className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
//               hover:scale-105 transition-transform duration-300 ease-in-out"
//               onClick={(e) => handleAddToCart(e, product)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;






















// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";
// import Swal from "sweetalert2";

// const sanity = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   token:
//     "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   tags: string[];
//   discountPercentage?: number;
//   isNew: boolean;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         tags,
//         discountPercentage,
//         isNew,
//         slug,
//         "imageUrl": productImage.asset->url,
//         productImage
//       }`;
//       const data: Product[] = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.title} added to cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//     addToCart(product);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
//         Our Exclusive Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <Link href={`/Product/${product.slug.current}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={300}
//                 height={300}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             </Link>
//             <h2 className="mt-4 text-xl font-bold text-gray-900">{product.title}</h2>
//             <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
//             <div className="mt-3 text-gray-800">
//               <p className="font-bold">${product.price.toFixed(2)}</p>
//               {product.discountPercentage && product.discountPercentage > 0 && (
//                 <p className="text-sm text-green-500">{product.discountPercentage}% off</p>
//               )}
//             </div>
//             <div className="mt-4 flex flex-wrap gap-2">
//               {product.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}

//             <div>
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
//                 hover:scale-110 transition-transform duration-300 ease-in-out"
//                 onClick={(e) => handleAddToCart(e, product)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;














// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";
// import Swal from "sweetalert2"



// const sanity = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   token:
//     "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   tags: string[];
//   discountPercentage?: number;
//   isNew: boolean;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
    
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };

//   };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//             _id,
//             title,
//             price,
//             description,
//             tags,
//             discountPercentage,
//             isNew,
//             slug,
//             "imageUrl": productImage.asset->url,
//             productImage
            
//         }`;
//       const data: Product[] = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} added to cart`);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleAddToCart=(e:React.MouseEvent,product:Product ) =>{
//       e.preventDefault()
//       Swal.fire({
//         position: "bottom",
//         icon: "success",
//         title :  `${product.title} added to cart`,
//         showConfirmButton:false,
//         timer:1000

//       })

//         addToCart(product)
      
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">Our Exclusive Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <Link href={`/Product/${product.slug.current}`}>
//             <Image
//               src={product.imageUrl}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover rounded-md"
//             /></Link>
//             <h2 className="mt-4 text-xl font-bold text-gray-900">{product.title}</h2>
//             <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
//             <div className="mt-3 text-gray-800">
//               <p className="font-bold">${product.price.toFixed(2)}</p>
//               {product.discountPercentage && product.discountPercentage > 0 && (
//                 <p className="text-sm text-green-500">{product.discountPercentage}% off</p>
                
//               )}
//             </div>
//             <div className="mt-4 flex flex-wrap gap-2">
//               {product.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             {product.isNew && <p className="mt-2 text-sm text-blue-500">New</p>}
            
//             <div>
//         <button
//       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
//       hover:scale-110 transition-transform duration-300 ease-in-out"
//       onClick={(e)=>handleAddToCart(e, product)}
//       >
// Add To Cart
//       </button>
//         </div>
//           </div>
//         ))}
//       </div>

//       {/* <div className="mt-12">
//         <h1 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">Your Shopping Cart</h1>
//         {cart.length > 0 ? (
//           <ul className="space-y-6">
//             {cart.map((item, index) => (
//               <li key={index} className="flex items-center gap-6 bg-white p-4 rounded-lg shadow">
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="w-24 h-24 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="text-lg font-semibold text-gray-900">{item.title}</p>
//                   <p className="text-gray-700">${item.price.toFixed(2)}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600 text-center">Your cart is empty. Add some items to your cart.</p>
//         )}
        
//       </div> */}
      
//     </div>
//   );
// };

// export default ProductCards;





















// 'use client';
// import React, { useEffect, useState } from "react";

// import Image from "next/image";
// import { createClient } from "@sanity/client";


// const sanity = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   token:
//     "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
// });
// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   tags: string[];
//   discountPercentage?: number;
//   isNew: boolean;
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const fetchData = async () => {
//     try {
//       const query = `*[_type == "product"]{
//             _id,
//             title,
//             price,
//             description,
//             tags,
//             discountPercentage,
//             isNew,
//             "imageUrl": productImage.asset->url,
//             productImage
//         }`;
//       const data: Product[] = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} added to cart`);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h2>Products from sanity</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-4 m-4 rounded-lg shadow-md"
//           >
//             <Image
//               src={product.imageUrl}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3>{product.title}</h3>
//             <p className="line-clamp-2">{product.description}</p>
//             <div>
//               <p>{product.price}</p>
//               {product.discountPercentage > 0 && (
//                 <p>{product.discountPercentage}% off</p>
//               )}
//             </div>
//             <div>
//               {product.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-800 rounded-full px-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             {product.isNew && <p>New</p>}
//             {/* Add to cart */}
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </div>
//       {/* summary */}
//       <div>
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               <p>{item.title}</p>
//               <p>${item.price.toFixed(2)}</p>

//               <Image
//                 src={item.imageUrl}
//                 alt={item.title}
//                 width={100}
//                 height={100}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             </li>
//           ))}
//         </ul>
//         : (
//             <p>
//                 Your cart is empty. Add some items to your cart
//             </p>
//         )
//       </div>
//     </div>
//   );
// };
// export default ProductCards;