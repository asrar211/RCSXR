import {
  IconArrowRight,
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
  IconStarFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  return (
    <div className="md:py-28 py-10 bg-neutral-100/80">

      <div className="relative">
        <h1 className="text-center text-4xl font-semibold">Featured Products</h1>
        <div className="h-1 w-12 absolute left-1/2 -translate-x-1/2 bg-black rounded-full mt-2"></div>
        <p className="text-center text-neutral-500 font-light mt-8 w-[90%] mx-auto">
          Check out our latest and most popular items
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 my-10 justify-center items-center">
        <FeaturedProductCard
          title="Premium Top"
          price={199.99}
          ratings={4}
          category="Top Wear"
          discount={20}
          img="https://img.freepik.com/free-photo/close-up-cute-child-portrait_23-2149153275.jpg?w=1480"
        />
        <FeaturedProductCard
          title="Premium Pant"
          price={139.99}
          ratings={5}
          category="Bottom Wear"
          discount={25}
          img="https://img.freepik.com/premium-photo/adorable-lavender-cargo-pants-kids-perfect-playful-adventures-springtime-afternoons-outdoors_705714-11970.jpg?w=1480"
        />
        <FeaturedProductCard
          title="Premium Shoe"
          price={239.99}
          ratings={5}
          category="Footwear"
          discount={35}
          img="https://img.freepik.com/free-photo/baby-shoes_1203-6998.jpg?w=1060"
        />
        <FeaturedProductCard
          title="Stylish Blue Shoe"
          price={149.99}
          ratings={3}
          category="Footwear"
          discount={10}
          img="https://img.freepik.com/free-photo/close-up-decorative-blue-shoe_23-2147630318.jpg?w=1060"
        />
      </div>

      <div className="flex justify-center items-center">
        <Link to='/products'><button className="bg-white px-6 py-3.5 rounded-md shadow-sm ring-1 ring-neutral-200 text-[14px] hover:bg-neutral-100 transition-all duration-300 ease-in-out w-fit flex gap-2 items-center justify-center group hover:shadow-lg">
          View All Products{" "}
          <span className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">
            <IconArrowRight size={16} />
          </span>
        </button></Link>
      </div>
    </div>
  );
};

type FeaturedProductProps = {
  title: string;
  price: number;
  ratings: number;
  img: string;
  category: string;
  discount: number;
};

function FeaturedProductCard({
  title,
  price,
  ratings,
  img,
  category,
  discount,
}: FeaturedProductProps) {
  const [wishlist, setWishlist] = useState<boolean>(false);

  return (
    <div className="cursor-pointer rounded-xl shadow-md sm:w-72 w-[90%] bg-white pb-5 group hover:shadow-xl hover:ring-2 ring-neutral-300 transition-all duration-300 ease-in-out">
      <div className="relative w-full aspect-4/5 overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="bg-white/90 text-neutral-800 shadow-sm font-medium border border-neutral-300 absolute top-2 left-2 text-[12px] rounded-md px-2 py-0.5">
          {category}
        </div>

        <div className="bg-red-600 text-white font-medium absolute top-2 right-2 text-[12px] rounded-md px-2 py-0.5 shadow-md">
          {discount}% OFF
        </div>

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


      <div className="mx-5 flex flex-col gap-1 mt-4">
        <h4 className="text-[17px] font-medium">{title}</h4>


        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: ratings }, (_, i) => (
              <IconStarFilled key={i} size={16} color="orange" />
            ))}
          </div>
          <span className="text-xs text-neutral-500">{ratings}.0</span>
        </div>


        <p className="flex gap-2 items-center text-[15px] font-medium mt-1">
          <span>${price}</span>
          <span className="text-xs text-neutral-500 line-through">
            ${Math.ceil(price / (1 - discount / 100))}
          </span>
        </p>


        <button className="bg-neutral-800 text-neutral-100 font-light w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-300 ease-in-out">
          <IconShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
