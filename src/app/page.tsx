import Hero from "./components/Hero";
import Peace from "./components/Peace";

import SubSection from "./components/SubSection";

import LastSec from "./components/LastSec";
import ProductCards from "./item/page";

export default async function Home() {
  return (
    <div className="w-full h-auto bg-white">
      <Hero />

      <SubSection />

      <ProductCards/>

      <Peace />

      <LastSec />
    </div>
  );
}


















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

















