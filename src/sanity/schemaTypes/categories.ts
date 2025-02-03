import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
    },
    {
      name: "products", // This will hold the reference to the products
      title: "Products",
      type: "array", // We use an array because a category can have multiple products
      of: [
        {
          type: "reference",
          to: [{ type: "product" }], // Reference to the product document
        },
      ],
    },
  ],
});

























// import { defineType } from "sanity";

// export const category = defineType({
//   name: "category",
//   title: "Category",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Category Title",
//       type: "string",
      
//     },
//     {
//       name:"image",
//       title:"Category Image",
//       type:"image",
//     },
//     {
//       title:"Number of Products",
//       name:"products",
//       type:"number"
//     }
   
    
   
//   ],
// });
