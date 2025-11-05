import { Link, NavLink } from "react-router-dom";
import {IconMenu2, IconShoppingCart, IconSun, IconX } from '@tabler/icons-react';
import { useState } from "react";
export const Navbar = () => {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-4.5">
        <div className="flex items-center gap-6">
          <Link to='/' className="text-[17px] cursor-pointer font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-400">RightChoice</Link>
          <ul className="md:flex gap-4 hidden">
            {links.map((link, index) => (
              <NavLink
              className={({ isActive }) =>
            `text-sm transition duration-200 ease-in-out cursor-pointer ${
              isActive ? "font-semibold" : "text-neutral-500"}`
            } 
                to={link.path} key={index}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-white relative p-1.5 rounded-full border border-neutral-200 hover:shadow-md hover:shadow-black/20 hover:bg-neutral-100 transition-all duration-300 ease-in-out"><IconShoppingCart size={20}/>
          <span className="absolute -right-1.5 -top-1.5 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">{2}</span>
          </span>
          <button className="hidden md:flex text-[12.5px] shadow-md px-3 py-1.5 rounded-md hover:bg-neutral-200 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 ease-in-out">Log in</button>
          <button className="hidden md:flex text-[12.5px] bg-neutral-900 text-white px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:shadow-sm hover:shadow-black/30 transition-all duration-300 ease-in-out">Sign up</button>
          <span className="bg-white relative p-1.5 rounded-full shadow-md hover:shadow-md hover:shadow-black/30 hover:bg-neutral-100 transition-all duration-300 ease-in-out"><IconSun size={20}/></span>
        <button onClick={() => setIsOpen(true)} className="md:hidden bg-white relative p-1.5 rounded-md shadow-md hover:shadow-lg hover:shadow-black/30 hover:bg-neutral-100 transition-all duration-300 ease-in-out"><IconMenu2 size={20}/></button>
        </div>

        {isOpen && (
          <div className="bg-white absolute inset-0">
            <div className="relative flex flex-col items-center bg-white pt-10 shadow-xl border-b border-neutral-200">
              <button onClick={() => setIsOpen(false)} className=" absolute right-2 top-2 p-1.5 shadow-md bg-white rounded-md hover:bg-neutral-100 hover:shadow-lg"><IconX size={20}/></button>
              {links.map((link, idx) => (
              <NavLink
              className={({ isActive }) =>
            `text-lg transition duration-200 ease-in-out cursor-pointer ${
              isActive ? "font-semibold" : "text-neutral-500"}`
            } 
                to={link.path} key={idx}>
                {link.name}
              </NavLink>
            ))}

            <div className="flex gap-5 mt-10">
               <button className=" text-[12.5px] shadow-md px-5 py-2 rounded-md hover:bg-neutral-200 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 ease-in-out">Log in</button>
          <button className=" text-[12.5px] bg-neutral-900 text-white px-5 py-2 rounded-md hover:bg-neutral-700 hover:shadow-sm hover:shadow-black/30 transition-all duration-300 ease-in-out">Sign up</button>
            </div>
              <p className="mt-5 text-sm text-neutral-400 font-light tracking-widest pb-1">@Right Choice, Srinagar</p>
            </div>  
        </div>
        )}
      </div>
     <div className="h-px w-full bg-neutral-300" />
    </div>
  );
};
