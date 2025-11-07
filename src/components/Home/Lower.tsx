
export const Lower = () => {
  return (
    <div className="xl:max-w-7xl xl:mx-auto bg-neutral-200/50 shadow-md md:py-15 py-8 rounded-xl md:my-20 my-10 mx-5">
        <div className="flex flex-col items-center gap-3">
            <h1 className="md:text-5xl text-2xl font-semibold">Ready to Shop with Us?</h1>
            <p className="text-neutral-500 mt-5 md:text-xl text-[16px] text-center  w-[90%] mx-auto lg:w-[60%]">Join thousands of satisfied customers and experience the best tech products on the market. Sign up today for exclusive deals and offers.</p>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
            <button className="py-3.5 px-7 bg-neutral-800 text-neutral-50 shadow-md hover:bg-neutral-700 transition-all duration-300 ease-in-out rounded-lg text-sm hover:shadow-lg">Sign Up Now</button>
            <button className="py-3.5 px-7 bg-white text-neutral-800 shadow-md hover:bg-neutral-100 transition-all duration-300 ease-in-out rounded-lg text-sm hover:shadow-lg">Browse Products</button>
        </div>
    </div>
  )
}
