import { IconHeart, IconHeartFilled, IconShoppingCart, IconStarFilled } from "@tabler/icons-react"
import { useState } from "react"

export const FeaturedProducts = () => {
  return (
    <div className="mt-32">
      <div className="relative">
        <h1 className="text-center text-4xl font-semibold">Featured Products</h1>
        <div className="h-1 w-12 absolute left-1/2 -translate-x-1/2 bg-black rounded-full mt-2"></div>
        <p className="text-center text-neutral-500 font-light mt-8 w-[90%] mx-auto">Check out our latest and most popular items</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-wrap gap-5 md:gap-5 my-10 justify-center items-center">
          <FeaturedProductCard 
          title="Premium Top" 
          price={199.99} 
          ratings={4} 
          category="Top Wear"
          discount={20}
          img="https://img.freepik.com/free-photo/close-up-cute-child-portrait_23-2149153275.jpg?t=st=1762346612~exp=1762350212~hmac=6b503bbf99163bd8eaedb8747d56ded95c0fff7f48af060ca49abe7a9d081eb0&w=1480"/>
          <FeaturedProductCard 
          title="Premium Pant" 
          price={139.99} 
          ratings={5} 
          category="Bottom Wear"
          discount={25}
          img="https://img.freepik.com/premium-photo/adorable-lavender-cargo-pants-kids-perfect-playful-adventures-springtime-afternoons-outdoors_705714-11970.jpg?w=1480"/>
          <FeaturedProductCard 
          title="Premium Shoe" 
          price={239.99} 
          ratings={5} 
          category="Footwear"
          discount={35}
          img="https://img.freepik.com/free-photo/baby-shoes_1203-6998.jpg?t=st=1762348623~exp=1762352223~hmac=d08dfb2d1312e2ac90337dc9656bb600d2733af82a7ab64dfe2addd8adea509c&w=1060"/>
          <FeaturedProductCard 
          title="Premium Shoe" 
          price={149.99} 
          ratings={3} 
          category="Footwear"
          discount={10}
          img="https://img.freepik.com/free-photo/close-up-decorative-blue-shoe_23-2147630318.jpg?t=st=1762348688~exp=1762352288~hmac=5544367b7e292436cd0f81925510724f4e354350cdd696830101f998d9da1be7&w=1060"/>
        </div>
    </div>
  )
}

type FeaturedProductProps = {
  title: string,
  price: number,
  ratings: number,
  img: string,
  category: string,
  discount: number
}
function FeaturedProductCard ({title, price, ratings, img, category, discount}: FeaturedProductProps) {

  const [wishlist , setWishlist] = useState<boolean>(false);
  return (
    <div className="cursor-pointer rounded-xl shadow-md sm:w-75 sm:h-120 w-[90%] h-130 pb-5 group hover:shadow-xl hover:ring-2 ring-neutral-300 transition-all duration-300 ease-in-out">
            <div className="relative w-full sm:h-[65%] h-[70%] overflow-hidden rounded-t-xl">
                <img className="w-full h-full object-cover object-top rounded-t-xl group-hover:scale-105 transition-all duration-300 ease-in-out" src={img} alt="" />
                <div className="bg-white text-neutral-800 shadow-sm font-serif border border-neutral-300 absolute w-fit top-2 left-2 text-[12px] rounded-lg px-1 py-0.5">{category}</div>
                <div className="bg-red-600 text-orange-300 absolute w-fit top-2 right-2 text-[12px] rounded-lg px-1 py-0.5">{discount}% OFF</div>
                <div
                onClick={() => setWishlist(!wishlist)}
                className={`invisible group-hover:visible transition-all duration-300 ease-in-out bg-neutral-600 text-orange-300 absolute w-fit bottom-2 right-2 text-[12px] rounded-lg px-1 py-0.5 cursor-pointer ${
                wishlist ? "scale-110" : "scale-100"}`}>
  {wishlist ? <IconHeartFilled /> : <IconHeart />}
</div>
            </div>
            <div className="mx-5 flex flex-col gap-1">
              <h4 className="pt-5 text-[17px]">{title}</h4>
              <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: ratings }, (_, i) => (
              <IconStarFilled key={i} size={16} color="orange" />
              ))}
            </div>
            <span className="text-xs text-neutral-500">{ratings}</span>
            </div>
              <p className=" flex gap-2 items-center"><span>${price }</span> <span className="text-xs text-neutral-500 line-through">${(price + (price * discount) / 100).toFixed(2)}</span></p>

              <button className="bg-neutral-800 text-neutral-100 font-light w-full mt-5 flex items-center justify-center py-2 rounded-lg hover:bg-neutral-700 transition-all duration-300 ease-in-out"><IconShoppingCart/>Add to Cart</button>
            </div>
          </div>
  )
}
