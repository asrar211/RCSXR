import {
  IconShoppingCart,
  IconStarFilled,
  IconHeart,
  IconHeartFilled,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useState } from "react";
import type { Product } from "../types/Product";

export const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Soft Cotton Baby Romper",
      description: "Comfortable cotton romper for infants with cute bear print. Gentle on sensitive skin.",
      category: "Clothing",
      price: 19.99,
      discount: 10,
      finalPrice: Number((19.99 - 19.99 * 0.1).toFixed(2)),
      image: "https://img.freepik.com/free-photo/cute-baby-romper_1203-3859.jpg?w=1480",
      rating: 4.8,
      stock: 20,
    },
    {
      id: 2,
      name: "Toddler Sneakers",
      description: "Lightweight and breathable sneakers designed for comfort and stability during playtime.",
      category: "Footwear",
      price: 29.99,
      discount: 15,
      finalPrice: Number((29.99 - 29.99 * 0.15).toFixed(2)),
      image: "https://img.freepik.com/free-photo/sport-shoes-kids_1203-7851.jpg?w=1480",
      rating: 4.6,
      stock: 15,
    },
    {
      id: 3,
      name: "Plush Elephant Toy",
      description: "Super soft plush elephant toy that kids will love to cuddle and sleep with.",
      category: "Toys",
      price: 14.99,
      discount: 5,
      finalPrice: Number((14.99 - 14.99 * 0.05).toFixed(2)),
      image: "https://img.freepik.com/free-photo/plush-toy-elephant_1203-5890.jpg?w=1480",
      rating: 4.9,
      stock: 35,
    },
    {
      id: 4,
      name: "Mini Learning Tablet",
      description: "Interactive learning toy tablet with music, alphabets, and lights for toddlers.",
      category: "Toys",
      price: 39.99,
      discount: 20,
      finalPrice: Number((39.99 - 39.99 * 0.2).toFixed(2)),
      image: "https://img.freepik.com/free-photo/educational-tablet-kids_1203-6914.jpg?w=1480",
      rating: 4.4,
      stock: 10,
    },
    {
      id: 5,
      name: "Kids Winter Jacket",
      description: "Warm and cozy jacket with soft fleece lining. Perfect for chilly weather adventures.",
      category: "Clothing",
      price: 49.99,
      discount: 25,
      finalPrice: Number((49.99 - 49.99 * 0.25).toFixed(2)),
      image: "https://img.freepik.com/free-photo/winter-jacket-child_1203-7190.jpg?w=1480",
      rating: 4.7,
      stock: 12,
    },
    {
      id: 6,
      name: "Colorful Building Blocks Set",
      description: "100-piece creative block set for improving motor skills and imagination.",
      category: "Toys",
      price: 24.99,
      discount: 10,
      finalPrice: Number((24.99 - 24.99 * 0.1).toFixed(2)),
      image: "https://img.freepik.com/free-photo/colored-building-blocks_1203-6849.jpg?w=1480",
      rating: 4.9,
      stock: 40,
    },
    {
      id: 7,
      name: "Kids Backpack - Dino Design",
      description: "Lightweight backpack with fun dinosaur design and multiple compartments.",
      category: "Accessories",
      price: 27.99,
      discount: 12,
      finalPrice: Number((27.99 - 27.99 * 0.12).toFixed(2)),
      image: "https://img.freepik.com/free-photo/kids-backpack-green-dino_1203-6121.jpg?w=1480",
      rating: 4.8,
      stock: 25,
    },
    {
      id: 8,
      name: "Soft Cotton Cap",
      description: "Cute cotton cap to protect kids from sun and keep them cool during play.",
      category: "Accessories",
      price: 9.99,
      discount: 5,
      finalPrice: Number((9.99 - 9.99 * 0.05).toFixed(2)),
      image: "https://img.freepik.com/free-photo/baby-hat-soft-cotton_1203-5321.jpg?w=1480",
      rating: 4.5,
      stock: 50,
    },
    {
      id: 9,
      name: "Kids Night Suit Set",
      description: "2-piece nightwear set made of breathable cotton for a cozy night’s sleep.",
      category: "Clothing",
      price: 22.99,
      discount: 8,
      finalPrice: Number((22.99 - 22.99 * 0.08).toFixed(2)),
      image: "https://img.freepik.com/free-photo/children-nightwear-cotton_1203-4231.jpg?w=1480",
      rating: 4.7,
      stock: 18,
    },
    {
      id: 10,
      name: "Colorful Water Bottle",
      description: "Leak-proof BPA-free bottle designed for small hands with cartoon prints.",
      category: "Accessories",
      price: 12.99,
      discount: 10,
      finalPrice: Number((12.99 - 12.99 * 0.1).toFixed(2)),
      image: "https://img.freepik.com/free-photo/kids-water-bottle-colorful_1203-7101.jpg?w=1480",
      rating: 4.6,
      stock: 30,
    },
    {
      id: 11,
      name: "Kids Woolen Gloves",
      description: "Warm, stretchable gloves perfect for kids during winters.",
      category: "Winter Wear",
      price: 9.99,
      discount: 10,
      finalPrice: Number((9.99 - 9.99 * 0.1).toFixed(2)),
      image: "https://img.freepik.com/free-photo/woolen-gloves_1203-489.jpg?w=1480",
      rating: 4.8,
      stock: 20,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };


  return (
    <div className="pt-20 mt-10 xl:mr-20">
      <div className="flex xl:flex-row justify-between xl:items-center flex-col mx-5">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">Products</h1>
          <p className="text-neutral-500 font-light text-[17px]">
            Browse our latest products and find something you'll love.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 mt-5">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition-all ${
            currentPage === 1
              ? "text-neutral-400 border-neutral-200 cursor-not-allowed"
              : "text-neutral-700 hover:bg-neutral-100 border-neutral-300"
          }`}
        >
          <IconChevronLeft size={18} /> Prev
        </button>

        <p className="text-sm text-neutral-700">
          Page <span className="font-semibold">{currentPage}</span> of{" "}
          {totalPages}
        </p>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition-all ${
            currentPage === totalPages
              ? "text-neutral-400 border-neutral-200 cursor-not-allowed"
              : "text-neutral-700 hover:bg-neutral-100 border-neutral-300"
          }`}
        >
          Next <IconChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

function ProductCard({ product }: { product: Product }) {
  const [wishlist, setWishlist] = useState(false);
  const filledStars = Math.floor(product.rating);
  const halfStar = product.rating - filledStars >= 0.5;

  const originalPrice = Math.ceil((product.price)/ (1 - product.discount / 100));

  return (
    <div className="bg-white rounded-xl shadow-md border border-neutral-200 hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="absolute top-2 left-2 bg-white/90 border border-neutral-300 text-neutral-800 text-xs font-medium px-2 py-0.5 rounded-md shadow-sm">
          {product.category}
        </div>

        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-medium px-2 py-0.5 rounded-md shadow-md">
            {product.discount}% OFF
          </div>
        )}

        <div
          onClick={() => setWishlist(!wishlist)}
          className={`absolute bottom-2 right-2 p-1.5 rounded-full bg-white shadow-md cursor-pointer transition-all duration-300 ease-in-out ${
            wishlist
              ? "text-red-500 scale-110"
              : "text-neutral-500 hover:text-red-500"
          }`}
        >
          {wishlist ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h1 className="font-medium text-[15px] text-neutral-800 line-clamp-2">
          {product.name}
        </h1>

        <div className="flex items-center mt-1 gap-1">
          {Array.from({ length: filledStars }).map((_, i) => (
            <IconStarFilled key={i} size={15} color="orange" />
          ))}
          {halfStar && <IconStarFilled size={15} color="#FFD580" />}
          <span className="text-xs text-neutral-500 ml-1">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <p className="text-[15px] font-semibold text-neutral-800">
            ${product.price}
          </p>
          <p className="text-[13px] text-neutral-500 line-through">
            ${originalPrice}
          </p>
        </div>

        <button className="mt-5 bg-neutral-800 text-neutral-100 font-light w-full flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-300 ease-in-out">
          <IconShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
