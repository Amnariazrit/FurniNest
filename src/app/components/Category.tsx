"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-25",
});

// Category type definition
interface Category {
  title: string;
  imageUrl: string;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const query = `*[_type == "category"] {
          title,
          "imageUrl": image.asset->url
        }`;

        const fetchedCategories = await client.fetch(query);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gray-100">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Browse The Range
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Discover high-quality furniture designed to enhance your living space.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 md:px-0">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link key={category.title} href={`/category/${category.title}`}>
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col items-center">
                <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300 object-center"
                  />
                </div>
                <div className="p-4 text-center w-full">
                  <p className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
                    {category.title}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Category;


























// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2025-01-25",
// });

// // Category type definition
// interface Category {
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg font-medium text-gray-600">Loading categories...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gray-100">
//       <div className="text-center max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//           Browse The Range
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mb-8">
//           Discover high-quality furniture designed to enhance your living space.
//         </p>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
//         {categories.length > 0 ? (
//           categories.map((category) => (
//             <Link key={category.title} href={`/category/${category.title}`}>
//               <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col items-center">
//                 <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-end pr-4">
//                   <Image
//                     src={category.imageUrl}
//                     alt={category.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="group-hover:scale-105 transition-transform duration-300 object-center"
//                   />
//                 </div>
//                 <div className="p-4 text-center w-full">
//                   <p className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors text-center">
//                     {category.title}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No categories available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Category;


















// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2025-01-25",
// });

// // Category type definition
// interface Category {
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg font-medium text-gray-600">Loading categories...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gray-100">
//       <div className="text-center max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//           Browse The Range
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mb-8">
//           Discover high-quality furniture designed to enhance your living space.
//         </p>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {categories.length > 0 ? (
//           categories.map((category) => (
//             <Link key={category.title} href={`/category/${category.title}`}>
//               <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
//                 <div className="relative w-full h-64 sm:h-72 md:h-80">
//                   <Image
//                     src={category.imageUrl}
//                     alt={category.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <p className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
//                     {category.title}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No categories available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Category;





















// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Your Sanity project ID
//   dataset: "production", // Your Sanity dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Sanity API version
// });

// // Category type definition
// interface Category {
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchCategoryData();
//   }, []); // Empty dependency array to run once when the component mounts

//   // If loading, show a message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category.title} href={`/category/${category.title}`}>
//                 <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] max-w-full">
//                     <Image
//                       src={category.imageUrl}
//                       alt={category.title}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-xl"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     />
//                   </div>
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;



















// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Your Sanity project ID
//   dataset: "production", // Your Sanity dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Sanity API version
// });

// // Category type definition
// interface Category {
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchCategoryData();
//   }, []); // Empty dependency array to run once when the component mounts

//   // If loading, show a message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category.title} href={`/category/${category.title}`}>
//                 <div className="flex flex-col items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl}
//                     alt={category.title}
//                     width={400}
//                     height={500}
//                     className="object-cover w-full h-[200px] sm:h-[300px] md:h-[350px] max-w-full mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;





























// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Your Sanity project ID
//   dataset: "production", // Your Sanity dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Sanity API version
// });

// // Category type definition
// interface Category {
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchCategoryData();
//   }, []); // Empty dependency array to run once when the component mounts

//   // If loading, show a message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category.title} href={`/category/${category.title}`}>
//                 <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl}
//                     alt={category.title}
//                     width={450}
//                     height={600}
//                     className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;































// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Category type definition
// interface Category {
  
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Sanity GROQ query to fetch categories
//         const query = `*[_type == "category"] {
          
//           title,
//           "imageUrl": image.asset->url // Fetch image URL
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         console.log("Fetched Categories:", fetchedCategories); // Log to see the data

//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchCategoryData();
//   }, []); // Empty dependency array to run only once

//   // If loading, show loading message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Dynamically render categories */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category.title} href={`/category/${category.title}`}>
//                 <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl} // Dynamically use the image URL
//                     alt={category.title} // Use the title as alt text for accessibility
//                     width={450}
//                     height={600}
//                     className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title} {/* Dynamically render the category title */}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p> // In case there are no categories
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

















// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Category type definition
// interface Category {
//   _id: string;
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Sanity GROQ query to fetch categories
//         const query = `*[_type == "category"] {
//           _id,
//           title,
//           "imageUrl": image.asset->url // Fetch image URL
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         console.log("Fetched Categories:", fetchedCategories); // Log to see the data

//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   // If loading, show loading message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Dynamically render categories */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category._id} href={`/category/${category._id}`}>
//                 <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl} // Dynamically use the image URL
//                     alt={category.title} // Use the title as alt text for accessibility
//                     width={450}
//                     height={600}
//                     className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title} {/* Dynamically render the category title */}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p> // In case there are no categories
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;



















// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Category type definition
// interface Category {
//   _id: string;
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Sanity GROQ query to fetch categories
//         const query = `*[_type == "category"] {
//           _id,
//           title,
//           "imageUrl": image.asset->url // Fetch image URL
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         console.log("Fetched Categories:", fetchedCategories); // Log to see the data

//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   // If loading, show loading message
//   if (loading) {
//     return <p>Loading categories...</p>;
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Dynamically render categories */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category._id} href={`/category/${category._id}`}>
//                 <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl} // Dynamically use the image URL
//                     alt={category.title} // Use the title as alt text for accessibility
//                     width={450}
//                     height={600}
//                     className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title} {/* Dynamically render the category title */}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p> // In case there are no categories
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;




































// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Ensure this is your actual project ID
//   dataset: "production", // Ensure this is your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Ensure this is compatible with your project
// });

// // Category type definition
// interface Category {
//   _id: string;
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Sanity GROQ query to fetch categories
//         const query = `*[_type == "category"] {
//           _id,
//           title,
//           "imageUrl": image.asset->url // Fetch image URL
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         console.log("Fetched Categories:", fetchedCategories); // Log to see the data

//         if (fetchedCategories.length === 0) {
//           console.log("No categories found.");
//         }

//         setCategories(fetchedCategories); // Set categories in state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Dynamically render categories */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <Link key={category._id} href={`/category/${category._id}`}>
//                 <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                   <Image
//                     src={category.imageUrl} // Dynamically use the image URL
//                     alt={category.title} // Use the title as alt text for accessibility
//                     width={450}
//                     height={600}
//                     className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                   />
//                   <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                     {category.title} {/* Dynamically render the category title */}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No categories available.</p> // In case there are no categories
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;


































// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// // Initialize Sanity client
// const client = createClient({
//   projectId: "4d6ygodw", // Replace with your actual project ID
//   dataset: "production", // Replace with your actual dataset
//   useCdn: true,
//   apiVersion: "2025-01-25", // Adjust to your Sanity API version
// });

// // Category type definition
// interface Category {
//   _id: string;
//   title: string;
//   imageUrl: string;
// }

// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   // Fetch categories from Sanity
//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         const query = `*[_type == "category"] {
//           _id,
//           title,
//           "imageUrl": image.asset->url
//         }`;

//         const fetchedCategories = await client.fetch(query);
//         setCategories(fetchedCategories); // Set the categories into state
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//       }
//     };

//     fetchCategoryData();
//   }, []);

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Dynamically render categories in a row */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           {categories.map((category) => (
//             <Link key={category._id} href={`/category/${category._id}`}>
//               <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                 <Image
//                   src={category.imageUrl}
//                   alt={category.title}
//                   width={450}
//                   height={600}
//                   className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//                 />
//                 <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                   {category.title}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;












// import { client } from "@/sanity/lib/client"; // Sanity client import
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Fetch data from Sanity on the server-side
// export async function getStaticProps() {
//   const query = `*[_type == "category"] {
//     title,
//     "imageUrl": image.asset->url,
//     products
//   }`;

//   // Fetch data from Sanity
//   const categories = await client.fetch(query);

//   // Log the fetched categories to the console (for debugging)
//   console.log('Fetched Categories:', categories);

//   return {
//     props: {
//       categories: categories || [], // Ensure categories is always an array, even if empty
//     },
//   };
// }

// interface Category {
//   title: string;
//   imageUrl: string;
//   products: any[]; // You could be more specific here based on your actual data
// }

// interface SubSectionProps {
//   categories: Category[];
// }

// const SubSection = ({ categories }: SubSectionProps) => {
//   // Check if categories are available and log if it's empty
//   if (!categories || categories.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <p>No categories available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((category) => (
//             <Link key={category.title} href={"/shop"}>
//               <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
//                 <Image
//                   src={category.imageUrl} // Dynamically use the image URL from the data
//                   alt={category.title} // Use category title as alt text
//                   width={381}
//                   height={480}
//                   className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
//                 />
//                 <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                   {category.title} {/* Dynamically display category title */}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;

















































// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// const SubSection = () => {
  
// // Fetch data from Sanity on the server-side
// export async function getStaticProps() {
//   // Sanity GROQ query
//   const query = `*[_type == "category"] {
//     title,
//     "imageUrl": image.asset->url,
//     products
//   }`;

//   // Fetch data from Sanity
//   const categories = await client.fetch(query);
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src={categories.url}
//                 alt="Dining"
//                 width={381}
//                 height={480}
//                 className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 {categories.title}
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={381}
//                 height={480}
//                 className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center mb-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={381}
//                 height={480}
//                 className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;











// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={450}
//                 height={600}
//                 className="object-cover w-full max-w-[350px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;











// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={380}
//                 height={480}
//                 className="object-cover w-full max-w-[280px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;






// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-7xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p1.png"
//                 alt="Dining"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Dining
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p2.png"
//                 alt="Living"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Living
//               </p>
//             </div>
//           </Link>

//           <Link href={"/shop"}>
//             <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0 hover:scale-105 transform transition-all duration-300 ease-in-out">
//               <Image
//                 src="/p3.png"
//                 alt="Bedroom"
//                 width={400}
//                 height={500}
//                 className="object-cover w-full max-w-[320px] mx-auto rounded-xl"
//               />
//               <p className="mt-4 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//                 Bedroom
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;









// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-6xl px-6">
//         <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to
//           elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//         <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//             <Image
//               src="/p1.png"
//               alt="Dining"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Dining
//             </p>
//           </div></Link>
//           <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3 mb-6 sm:mb-0">
//             <Image
//               src="/p2.png"
//               alt="Living"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Living
//             </p>
//           </div></Link>

// <Link href={"/shop"}>
//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p3.png"
//               alt="Bedroom"
//               width={381}
//               height={480}
//               className="object-cover w-full max-w-[300px] mx-auto"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[20px] font-semibold leading-[36px] text-center">
//               Bedroom
//             </p>
//           </div></Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;







































// import React from "react";
// import Image from "next/image";

// const SubSection = () => {
//   return (
//     <div className="w-full py-12 flex justify-center items-center bg-[#F9F9F9] mt-14">
//       <div className="text-center max-w-4xl px-6">
//         <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#333333] mb-4">
//           Browse The Range
//         </h2>
//         <p className="font-poppins text-lg lg:text-xl text-[#555555] mb-8">
//           Explore our diverse collection of premium furniture designed to
//           elevate your living space.
//         </p>

//         {/* Images in a row */}
//         <div className="flex justify-center gap-6 flex-wrap sm:flex-nowrap">
//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p1.png"
//               alt="Dining"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Dining
//             </p>
//           </div>

//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p2.png"
//               alt="Living"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Living
//             </p>
//           </div>

//           <div className="flex flex-col items-center w-full sm:w-1/3">
//             <Image
//               src="/p3.png"
//               alt="Bedroom"
//               width={381}
//               height={480}
//               className="object-cover"
//             />
//             <p className="mt-2 font-poppins text-[#333333] text-[18px] sm:text-[24px] font-semibold leading-[36px] text-center">
//               Bedroom
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubSection;
