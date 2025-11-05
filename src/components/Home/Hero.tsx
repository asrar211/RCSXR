import { IconArrowRight, IconTruck, IconClock } from "@tabler/icons-react"
export const Hero = () => {
  return (
    <div className="relative">
    <div className="flex justify-between xl:h-[70vh] h-[60vh] max-w-7xl mx-auto">
        <div className="w-full h-full pt-20 xl:pt-36 pl-3">
            <p className="bg-neutral-200 rounded-lg text-[12.5px] font-semibold w-fit py-1 px-3 text-neutral-900">Right Choice Srinagar</p>
            <h1 className="md:text-[65px] text-4xl text-neutral-900 md:font-bold font-semibold tracking-tighter md:leading-17 mt-5">Your One-Stop Shop <span className="bg-clip-text text-transparent bg-linear-to-r from-neutral-900 to-neutral-400">for Kids.</span></h1>
            <p className="text-neutral-500 text-lg font-light mt-5 mr-10 md:mr-60 xl:mr-45 md:text-xl">Discover premium products at competitive prices, with fast shipping and exceptional customer service.</p>
            <div className="flex flex-col items-start gap-3 mt-5 md:flex-row">
                <button className="text-sm bg-neutral-900 px-5 py-3 rounded-md hover:bg-neutral-700 hover:shadow-sm hover:shadow-black/30 transition-all duration-300 ease-in-out text-neutral-100 font-light flex items-center gap-1">Shop Now <span><IconArrowRight size={17}/></span></button>
                <button className="text-sm shadow-md px-7 py-3 rounded-md hover:bg-neutral-200 hover:shadow-xl transition-all duration-300 ease-in-out border border-neutral-300">View Showcase</button>
            </div>
            <div className="flex items-center gap-5 mt-5">
            <p className="text-sm text-neutral-500 font-light flex items-center gap-1"><IconTruck/>Free shipping over $100</p>
            <p className="text-sm text-neutral-500 font-light flex items-center gap-1"><IconClock/>24/7 Customer Support</p>
            </div>
        </div>
        <div className="w-full h-full hidden xl:flex justify-center items-center">
          <img className="w-120 h-120 object-cover rounded-xl shadow-md" src="https://img.freepik.com/free-photo/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section_627829-6483.jpg?t=st=1762326651~exp=1762330251~hmac=75e93d7610d50d781fbc6a92e7b76568b1287005a0d3176212d581a13f112e58&w=740" alt="" />
        </div>
    </div>
        <div className="w-full h-px absolute bg-linear-to-r from-neutral-50 via-neutral-400 to-neutral-50"></div>
        </div>
  )
}
