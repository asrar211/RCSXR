import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react"


export const Footer = () => {
  return (
    <div>
      <hr className="text-neutral-300 h-px w-full"/>
      <div className="relative xl:max-w-7xl xl:mx-auto py-15 flex flex-col xl:flex-row justify-between mx-5">
        <div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-200">RightChoice</h4>
          <p className="text-sm font-light text-neutral-500 mt-3">Your One-Stop Shop for Kids.</p>
          <div className="flex items-center gap-5 mt-5">
            <span className="p-1 shadow-sm rounded-full hover:bg-neutral-100 hover:shadow-md transition-all duration-300 ease-in-out">
    <IconBrandFacebook stroke={1.2} />
  </span>
  <span className="p-1 shadow-sm rounded-full hover:bg-neutral-100 hover:shadow-md transition-all duration-300 ease-in-out">
    <IconBrandTwitter stroke={1.2} />
  </span>
  <span className="p-1 shadow-sm rounded-full hover:bg-neutral-100 hover:shadow-md transition-all duration-300 ease-in-out">
    <IconBrandInstagram stroke={1.2} />
  </span>
  <span className="p-1 shadow-sm rounded-full hover:bg-neutral-100 hover:shadow-md transition-all duration-300 ease-in-out">
    <IconBrandYoutube stroke={1.2} />
  </span>
          </div>
          </div>
        </div>
          <div className="mt-5 xl:mt-0">
          <h2 className="font-medium text-[15px]">Shop</h2>
          <div className="flex flex-col gap-1 mt-3 text-neutral-500 text-[15px] font-light cursor-pointer">
            <h4>All Products</h4>
            <h4>Top Wear</h4>
            <h4>Bottom Wear</h4>
            <h4>Footwear</h4>
            <h4>Winter Wear</h4>
          </div>
        </div>
        <div className="mt-5 xl:mt-0">
          <h2 className="font-medium text-[15px]">Company</h2>
          <div className="flex flex-col gap-1 mt-3 text-neutral-500 text-[15px] font-light cursor-pointer">
            <h4>About Us</h4>
            <h4>Blog</h4>
            <h4>Press</h4>
            <h4>Contact</h4>
          </div>
        </div>
        <div className="mt-5 xl:mt-0">
          <h2 className="font-medium text-[15px]">Support</h2>
          <div className="flex flex-col gap-1 mt-3 text-neutral-500 text-[15px] font-light cursor-pointer">
            <h4>Help Center</h4>
            <h4>Shipping & Returns</h4>
            <h4>Warranty</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms & Service</h4>
          </div>
        </div>
        <hr className="text-neutral-300 h-px w-full absolute bottom-0"/>
      </div>
      <p className="xl:max-w-7xl xl:mx-auto mx-5 text-sm text-neutral-500 font-light my-10">&copy; 2025 Right Choice. All Rights Reserved</p>
    </div>
  )
}
