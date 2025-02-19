import Peace from "./components/Peace";
import Category from "./components/Category";

import LastSec from "./components/LastSec";

import Carousel from "./components/Carousel";
import Services from "./components/Services";

export default async function Home() {
  return (
    <div className="w-full h-auto bg-white">
      <Carousel />

      <Category />

      <Peace />

      <LastSec />
      
      <Services />
    </div>
  );
}




















///// old /////

// import ProductList from "./components/ProductList";
// import IProducts from "./types/Product";
// import ProductCards from "@/app/item/page";

// export default async function Home() {
//   const response = await fetch("https://template6-six.vercel.app/api/products");
//   const products: IProducts[] = await response.json();

//   return (
//    <div>
//     <div>

//       <ProductCards />

//     </div>
//    </div>
//   );
// }
