'use client'
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: "production", // Your Sanity dataset
  useCdn: true,
  apiVersion: "2025-01-25", // Sanity API version
});

// Define a type for Product data
interface Product {
  title: string;
  imageUrl: string;
  description: string;
}

interface CategoryPageProps {
  params: {
    title: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { title } = params; // Directly extract the category title from params

  useEffect(() => {
    // Fetch products when title changes
    if (title) {
      const fetchProducts = async () => {
        try {
          const query = `*[_type == "product" && references("${title}")] {
            title,
            "imageUrl": image.asset->url,
            description
          }`;

          const fetchedProducts = await client.fetch(query);
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [title]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
      <div className="text-center max-w-7xl px-6">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
          Products in this Category
        </h2>

        <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.title} className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={450}
                  height={600}
                  className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
                />
                <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
                  {product.title}
                </p>
                <p className="mt-2 font-poppins text-[#777777] text-sm text-center">{product.description}</p>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

























// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import { useRouter } from "next/router"; // Import useRouter to handle dynamic routing

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Define a type for Product data
// interface Product {
  
//   title: string;
//   imageUrl: string;
//   description: string;
// }

// const CategoryPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Get the categoryId from the URL using useRouter
//   const router = useRouter();
//   const { title } = router.query;

//   useEffect(() => {
//     if (title) {
//       const fetchProducts = async () => {
//         try {
//           const query = `*[_type == "product" && references("${title}")] {
            
//             title,
//             "imageUrl": image.asset->url,
//             description
//           }`;

//           const fetchedProducts = await client.fetch(query);
//           setProducts(fetchedProducts);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProducts();
//     }
//   }, [title]); // Fetch products whenever the id changes

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Products in this Category
//         </h2>

//         {/* Dynamically render products */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.title} className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   width={450}
//                   height={600}
//                   className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                 />
//                 <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                   {product.title}
//                 </p>
//                 <p className="mt-2 font-poppins text-[#777777] text-sm text-center">{product.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;































// "use client"; 
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Define a type for Product data
// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   description: string;
// }

// interface PageProps {
//   params: {
//     id: string;  // The category ID coming from the URL
//   };
// }

// const CategoryPage: React.FC<PageProps> = ({ params }) => {
//   const { id } = params; // Get the category ID directly from params
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products when the category ID changes
//   useEffect(() => {
//     if (id) {
//       const fetchProducts = async () => {
//         try {
//           // Sanity query to fetch products belonging to the current category
//           const query = `*[_type == "product" && references("${id}")] {
//             _id,
//             title,
//             "imageUrl": image.asset->url,
//             description
//           }`;

//           const fetchedProducts = await client.fetch(query);
//           setProducts(fetchedProducts);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProducts();
//     }
//   }, [id]);

//   // If still loading, show loading message
//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Products in this Category
//         </h2>

//         {/* Dynamically render products */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product._id} className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   width={450}
//                   height={600}
//                   className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                 />
//                 <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                   {product.title}
//                 </p>
//                 <p className="mt-2 font-poppins text-[#777777] text-sm text-center">{product.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;




















// // category/[id]/page.tsx

// // Mark this file as client-side only (only if necessary for other logic)
// "use client"; 
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Define a type for Product data
// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   description: string;
// }

// interface PageProps {
//   params: {
//     id: string;  // The category ID coming from the URL
//   };
// }

// const CategoryPage: React.FC<PageProps> = ({ params }) => {
//   const { title } = params; // Get the category ID directly from params
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products when the category ID changes
//   useEffect(() => {
//     if (title) {
//       const fetchProducts = async () => {
//         try {
//           // Sanity query to fetch products belonging to the current category
//           const query = `*[_type == "product" && references("${title}")] {
//             _id,
//             title,
//             "imageUrl": image.asset->url,
//             description
//           }`;

//           const fetchedProducts = await client.fetch(query);
//           setProducts(fetchedProducts);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProducts();
//     }
//   }, [title]);

//   // If still loading, show loading message
//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Products in this Category
//         </h2>

//         {/* Dynamically render products */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.title} className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   width={450}
//                   height={600}
//                   className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                 />
//                 <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                   {product.title}
//                 </p>
//                 <p className="mt-2 font-poppins text-[#777777] text-sm text-center">{product.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

