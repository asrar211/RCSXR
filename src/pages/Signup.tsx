import { Link } from "react-router-dom"
export const Signup = () => {
  return (
    <div className="pt-17 flex items-center max-[64rem]:h-screen">
        <div className="w-[50%] hidden lg:flex h-screen">
          <img clasaName="w-full h-full object-cover object-top" src="https://img.freepik.com/free-photo/cute-little-girl-shopping_624325-3892.jpg?t=st=1762584710~exp=1762588310~hmac=6fb5a7bc3e3fa2fc27f6fe58866c03547ddc55c572ef89077ef1ead0df181866&w=360" alt="image" />
        </div>
        <div className="flex flex-col max-w-3xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold max-[64rem]:text-center">Create Account</h1>
            <p className="text-neutral-500 mt-3 font-light text-[14px] max-[64rem]:text-center">Enter your details to create your account</p>
          </div>
          <div className=" rounded-xl bg-white p-4 shadow-md max-[55rem]:w-[90vw] w-[500px] mt-5">
            <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="name">Full Name</label>
            <input className="border border-neutral-200 shadow-sm text-sm placeholder:text-neutral-500 rounded-lg p-2 placeholder:font-light outline-0 focus:ring-3 focus:ring-neutral-300 transition-all duration-300 ease-in-out" type="text" placeholder="Jhon Doe" />
            </div>
            <div className="flex flex-col gap-1 mt-3">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input className="border border-neutral-200 shadow-sm text-sm placeholder:text-neutral-500 rounded-lg p-2 placeholder:font-light outline-0 focus:ring-3 focus:ring-neutral-300 transition-all duration-300 ease-in-out" type="text" placeholder="name@example.com" />
            </div>
            <div className="flex flex-col gap-1 mt-3">
            <label className="text-sm font-medium" htmlFor="password">Password</label>
            <input className="border border-neutral-200 shadow-sm text-sm placeholder:text-neutral-500 rounded-lg p-2 placeholder:font-light outline-0 focus:ring-3 focus:ring-neutral-300 transition-all duration-300 ease-in-out" type="text" placeholder="" />
            </div>
            <div className="relative flex justify-center items-center mt-5">
              <button className="bg-neutral-800 shadow-sm text-neutral-50 py-2 w-full rounded-lg text-sm hover:bg-neutral-700 transition-all duration-300 ease-in-out hover:shadow-lg">Create Account</button>
            <hr className="w-full h-px text-neutral-200 mt-5 absolute -bottom-10 left-0"/>
            </div>
            <div className="mt-15 text-center">
              <p className="text-neutral-500 text-sm">Already have an account? <span className="text-neutral-800 cursor-pointer"><Link to='/auth/signin'>Sign in</Link></span></p>
            </div>
          </div>
        </div>
    </div>
  )
}
