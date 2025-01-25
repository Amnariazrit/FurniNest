

 interface IProducts {
  _id: string;
  imageUrl: string
  isNew: boolean;
  id: string;
  title: string;
  image: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  description: string;
  slug:{
    _type: slug;
    current: string;
  }
} 

interface Product {
  imageUrl:string;
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
    
  image: string;
  productImage: {
    asset: {
      _ref: string
      _type: string;
    };

  };
  quantity: number;
}