import { images } from "../../assets/products/images";
import { StaticImageData } from "next/image";

interface SubItem {
  name: string;
  imageUrl: string | StaticImageData;
  category: string;
}

interface ProductCardProps {
  title: string;
  link: string;
  imageUrl: string | StaticImageData;
  subItems?: SubItem[];
}

interface BestSellerItem {
  name: string;
  imageUrl: string | StaticImageData;
  category: string;
}

export const products: ProductCardProps[] = [
  {
    title: "Gaming accessories",
    link: "/products?category=gaming",
    imageUrl: "",
    subItems: [
      { name: "headphone", imageUrl: images.headphone, category: "gaming" },
      { name: "keyboard", imageUrl: images.keyboard, category: "gaming" },
      { name: "mouse", imageUrl: images.mouse, category: "gaming" },
      { name: "chair", imageUrl: images.chair, category: "gaming" },
    ],
  },
  {
    title: "Fashion Trends",
    link: "/products?category=women",
    imageUrl: " ",
    subItems: [
      { name: "dress", imageUrl: images.dress, category: "women" },
      { name: "knits", imageUrl: images.knits, category: "women" },
      { name: "jackets", imageUrl: images.jacket, category: "women" },
      { name: "jewelry", imageUrl: images.jewelry, category: "women" },
    ],
  },
  {
    title: "Refresh your space",
    imageUrl: " ",
    link: "/products?category=home",
    subItems: [
      { name: "dinning", imageUrl: images.dinning, category: "home" },
      { name: "home", imageUrl: images.home, category: "home" },
      { name: "kitchen", imageUrl: images.kitchen, category: "kitchen" },
      { name: "health", imageUrl: images.health, category: "women" },
    ],
  },

  {
    title: "Watches",
    link: "/products?category=smartwatches",
    imageUrl: images.watches,
  },
];

export const products2: ProductCardProps[] = [
  {
    title: "Gaming accessories",
    link: "/products?category=gaming",
    imageUrl: "",
    subItems: [
      { name: "Apparel", imageUrl: images.apparel, category: "gaming" },
      { name: "Hats", imageUrl: images.hats, category: "gaming" },
      {
        name: "Action figures",
        imageUrl: images.action,
        category: "action-figures",
      },
      { name: "Mugs", imageUrl: images.mug, category: "kitchen" },
    ],
  },
  {
    title: "Deals in pc",
    link: "/products?category=gaming",
    imageUrl: images.pc,
  },
  {
    title: "Have more fun with family",
    imageUrl: " ",
    link: "/products?category=toys",
    subItems: [
      { name: "slide", imageUrl: images.slide, category: "toys" },
      { name: "figure", imageUrl: images.figure1, category: "action-figures" },
      { name: "toy", imageUrl: images.toy1, category: "toys" },
      { name: "doll house", imageUrl: images.dollhouse, category: "toys" },
    ],
  },
  {
    title: "Great prices on shoes",
    link: "/products?category=shoes",
    imageUrl: images.shoes,
  },
];

export const Kitchen: BestSellerItem[] = [
  { name: "Bounty", imageUrl: images.bounty, category: "kitchen" },
  { name: "Water Bottle", imageUrl: images.bottle, category: "kitchen" },
  { name: "Travel Mug", imageUrl: images.cup, category: "kitchen" },
  { name: "Scott Paper Towels", imageUrl: images.scott, category: "ktichen" },
  { name: "swabs", imageUrl: images.swabs, category: "kitchen" },
  { name: "bottles", imageUrl: images.bottles, category: "kitchen" },
  { name: "sparkles", imageUrl: images.sparkles, category: "kitchen" },
  { name: "plates", imageUrl: images.plates, category: "kitchen" },
  { name: "jug", imageUrl: images.jug, category: "kitchen" },
];

export const Men: BestSellerItem[] = [
  { name: "men1", imageUrl: images.men1, category: "men" },
  { name: "men2", imageUrl: images.men2, category: "men" },
  { name: "men3", imageUrl: images.men3, category: "men" },
  { name: "men4", imageUrl: images.men4, category: "men" },
  { name: "men5", imageUrl: images.men5, category: "men" },
  { name: "men6", imageUrl: images.men6, category: "men" },
  { name: "men7", imageUrl: images.men7, category: "men" },
  { name: "men8", imageUrl: images.men8, category: "men" },
  { name: "men1", imageUrl: images.men1, category: "men" },
];
