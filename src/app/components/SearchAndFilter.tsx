'use client'

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

interface SearchFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ products, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle the filter visibility

  const uniqueTags = Array.from(
    new Set(products.flatMap((product) => product.tags || []))
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query, selectedTags);
  };

  const toggleTag = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    filterProducts(searchQuery, updatedTags);
  };

  const filterProducts = (query: string, tags: string[]) => {
    let filtered = products;

    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    }

    if (tags.length > 0) {
      filtered = filtered.filter((product) =>
        product.tags?.some((tag) => tags.includes(tag))
      );
    }

    onFilter(filtered);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
      {/* Icon to toggle the search filter */}
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
        <FaSearch className="text-xl" />
      </button>

      {/* Conditionally rendered search filter */}
      {isOpen && (
        <div className="mt-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          {/* Filter by Tags */}
          <div className="flex flex-wrap gap-3">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none 
                  ${selectedTags.includes(tag)
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;














// 'use client';

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

// interface SearchFilterProps {
//   products: Product[];
//   onFilter: (filteredProducts: Product[]) => void;
// }

// const SearchFilter: React.FC<SearchFilterProps> = ({ products, onFilter }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [isOpen, setIsOpen] = useState(false); // State to toggle the filter visibility

//   const uniqueTags = Array.from(
//     new Set(products.flatMap((product) => product.tags || []))
//   );

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     filterProducts(query, selectedTags);
//   };

//   const toggleTag = (tag: string) => {
//     const updatedTags = selectedTags.includes(tag)
//       ? selectedTags.filter((t) => t !== tag)
//       : [...selectedTags, tag];
//     setSelectedTags(updatedTags);
//     filterProducts(searchQuery, updatedTags);
//   };

//   const filterProducts = (query: string, tags: string[]) => {
//     let filtered = products;

//     if (query) {
//       filtered = filtered.filter((product) =>
//         product.title.toLowerCase().includes(query)
//       );
//     }

//     if (tags.length > 0) {
//       filtered = filtered.filter((product) =>
//         product.tags?.some((tag) => tags.includes(tag))
//       );
//     }

//     onFilter(filtered);
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
//       {/* Icon to toggle the search filter */}
//       <button
//         onClick={() => setIsOpen(!isOpen)} 
//         className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
//         <FaSearch className="text-xl" />
//       </button>

//       {/* Conditionally rendered search filter */}
//       {isOpen && (
//         <div className="mt-4">
//           {/* Search Input */}
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
//           />

//           {/* Filter by Tags */}
//           <div className="flex flex-wrap gap-3">
//             {uniqueTags.map((tag) => (
//               <button
//                 key={tag}
//                 onClick={() => toggleTag(tag)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none 
//                   ${selectedTags.includes(tag)
//                     ? "bg-blue-500 text-white hover:bg-blue-600"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchFilter;































// 'use client'


// import React, { useState } from "react";


// interface SearchFilterProps {
//   products: Product[];
//   onFilter: (filteredProducts: Product[]) => void;
// }

// const SearchFilter: React.FC<SearchFilterProps> = ({ products, onFilter }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);

//   const uniqueTags = Array.from(
//     new Set(products.flatMap((product) => product.tags || []))
//   );

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     filterProducts(query, selectedTags);
//   };

//   const toggleTag = (tag: string) => {
//     const updatedTags = selectedTags.includes(tag)
//       ? selectedTags.filter((t) => t !== tag)
//       : [...selectedTags, tag];
//     setSelectedTags(updatedTags);
//     filterProducts(searchQuery, updatedTags);
//   };

//   const filterProducts = (query: string, tags: string[]) => {
//     let filtered = products;

//     if (query) {
//       filtered = filtered.filter((product) =>
//         product.title.toLowerCase().includes(query)
//       );
//     }

//     if (tags.length > 0) {
//       filtered = filtered.filter((product) =>
//         product.tags?.some((tag) => tags.includes(tag))
//       );
//     }

//     onFilter(filtered);
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md mb-6">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={handleSearch}
//         className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//       />

//       {/* Filter by Tags */}
//       <div className="flex flex-wrap gap-2">
//         {uniqueTags.map((tag) => (
//           <button
//             key={tag}
//             onClick={() => toggleTag(tag)}
//             className={`px-3 py-1 rounded-lg ${
//               selectedTags.includes(tag)
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;
