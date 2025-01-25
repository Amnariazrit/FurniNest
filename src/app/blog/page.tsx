// 'use client';
// import Link from "next/link";
// import { FiSearch } from "react-icons/fi";
// import Image from "next/image";
// import Services from "../components/Services";
// import { useEffect, useState } from "react";

// export default function Blog() {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   // Fetching blog posts dynamically
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://template6-six.vercel.app/api/products'); // Replace with your API URL
//         const data = await response.json();
//         setPosts(data); // Save data to state
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch posts");
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Blog header */}
//         <h1 className="text-3xl font-bold mb-6">Our Blog</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-white shadow-md rounded-lg overflow-hidden"
//               >
//                 <Image
//                   src={post.featured_image_url || "/default-image.jpg"} // Check if the post has an image
//                   alt={post.title.rendered || "Blog Post"}
//                   width={800}
//                   height={500}
//                   className="w-full h-auto"
//                 />
//                 <div className="p-6">
//                   <div className="text-sm text-gray-600 flex items-center space-x-3">
//                     <span>{post.author_name || "Admin"}</span>
//                     <span>·</span>
//                     <span>{new Date(post.date).toLocaleDateString()}</span>
//                     <span>·</span>
//                     <span>{post.category || "Uncategorized"}</span>
//                   </div>
//                   <h2 className="text-xl font-semibold mt-4 mb-2">{post.title}</h2>
//                   <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                   {/* Check if the post has a link before rendering the Link component */}
//                   {post.link ? (
//                     <Link href={post.link}>
//                       <span className="text-blue-500 hover:underline cursor-pointer">
//                         Read more
//                       </span>
//                     </Link>
//                   ) : (
//                     <span className="text-gray-500">No link available</span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar */}
//           <div>
//             {/* Categories */}
//             <div className="bg-white shadow-md rounded-lg p-4 mb-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   className="mb-4 w-full border border-[#9F9F9F] rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Search"
//                 />
//                 <FiSearch className="absolute right-3 top-3 text-gray-500 text-xl" />
//               </div>
//               <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
//               <ul className="space-y-10">
//                 {["Crafts", "Design", "Handmade", "Wood", "Mixed"].map((category, index) => (
//                   <li key={category} className="flex justify-between items-center">
//                     <Link href="#">
//                       <span className="text-[#9F9F9F] hover:text-blue-500 cursor-pointer">{category}</span>
//                     </Link>
//                     <span className="text-[#9F9F9F]">{["2", "8", "7", "1", "6"][index]}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Recent Posts */}
//             <div className="bg-white shadow-md rounded-lg p-4">
//               <h3 className="text-lg font-semibold mb-4 text-black">Recent Posts</h3>
//               {posts.slice(0, 5).map((post) => (
//                 <div key={post.id} className="flex items-center mb-9">
//                   <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
//                     <Image
//                       src={post.image_url || "/default-image.jpg"} // Check if the post has an image
//                       alt={`Thumbnail ${post.title}`}
//                       width={64}
//                       height={64}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="text-sm font-medium text-black">{post.title.rendered}</h2>
//                     <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="mt-8 flex justify-center items-center space-x-9">
//           <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">1</button>
//           <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">2</button>
//           <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">Next</button>
//         </div>
//       </div>
//       <Services />
//     </div>
//   );
// }








import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Services from "../components/Services";

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Blog header */}
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={`/blog-post-${post}.jpg`}
                  alt="Blog Post"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-600 flex items-center space-x-3">
                    <span>Admin</span>
                    <span>·</span>
                    <span>March 2022</span>
                    <span>·</span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-xl font-semibold mt-4 mb-2">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores totam est earum ducimus aliquid eum aperiam,
                    incidunt perferendis asperiores voluptates fugiat doloremque
                    cupiditate, rerum illo dignissimos ipsam unde aliquam
                    facilis.
                  </p>
                  <Link href="#">
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            {/* Categories */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-8">
              <div className="relative">
                <input
                  type="text"
                  className="mb-4 w-full border border-[#9F9F9F] rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-black">
                Categories
              </h3>
              <ul className="space-y-10">
                {["Crafts", "Design", "Handmade", "Wood", "Mixed"].map(
                  (category, index) => (
                    <li
                      key={category}
                      className="flex justify-between items-center"
                    >
                      <Link href="#">
                        <span className="text-[#9F9F9F] hover:text-blue-500 cursor-pointer">
                          {category}
                        </span>
                      </Link>
                      <span className="text-[#9F9F9F]">
                        {["2", "8", "7", "1", "6"][index]}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-black">
                Recent Posts
              </h3>
              {[1, 2, 3, 4, 5].map((post) => (
                <div key={post} className="flex items-center mb-9">
                  <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                    <Image
                      src={`/thumb${post}.jpg`}
                      alt={`Thumbnail ${post}`}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-black">
                      {post === 1
                        ? "Going all-in with millennial design"
                        : post === 2
                          ? "Exploring new ways of decorating"
                          : post === 3
                            ? "Handmade pieces that took time to make"
                            : post === 4
                              ? "Modern home in Milan"
                              : "Colorful office redesign"}
                    </h2>

                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center space-x-9">
          <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">
            1
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            1
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            2
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            Next
          </button>
        </div>
      </div>
      <Services />
    </div>
  );
}
