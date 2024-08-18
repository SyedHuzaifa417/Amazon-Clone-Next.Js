import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SubItem {
  name: string;
  imageUrl: string | StaticImageData;
  category: string;
}

interface ProductCardProps {
  title: string;
  imageUrl: string | StaticImageData;
  link: string;
  subItems?: SubItem[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageUrl,
  link,
  subItems,
}) => (
  <div className="bg-white p-4 rounded-lg shadow h-auto">
    <h3 className="text-xl font-bold mb-3 font-bodyFont">{title}</h3>
    {subItems ? (
      <div className="grid grid-cols-2 gap-3 mb-1">
        {subItems.map((item, index) => (
          <Link href={`/products?category=${item.category}`} key={index}>
            <div className="text-center cursor-pointer ">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={250}
                height={250}
                className="mx-auto mb-4 cursor-pointer "
              />
              <p className="text-xs">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <Link href={link}>
        <Image
          src={imageUrl}
          alt={title}
          width={250}
          height={250}
          className="w-full h-auto cursor-pointer"
        />
      </Link>
    )}
    <Link
      href={link}
      className="text-sm text-blue-500 hover:underline mt-2 flex  items-end justify-start"
    >
      {link.startsWith("See") || link.startsWith("Shop") ? link : "See more"}
    </Link>
  </div>
);

export default ProductCard;
