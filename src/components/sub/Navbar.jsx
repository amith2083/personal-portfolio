
import { copyRightIcon, navbarData } from "@/assets";
import React from "react";


const Navbar = () => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10">
      <a href="#">
        {/* <span className="text-3xl font-semibold text-red-400">K M</span> */}
        <img src='./software-developer.png' alt="Logo" className="w-10 h-10 object-contain" />
{/* 
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold text-red-400">Amith</span> */}
      </a>
      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((item,i)=>
        <a href={`/#${item.id}`} key={i} className="group flex-col items-center gap-y-2">
          <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">
            {item.icon}
          </span>
          <span className="text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:transLate-x-0 group-hover:opacity-100 transition-all duration-300 text-center">
            {item.name}
          </span>
        </a>

        )}
        
      </div>
      <p className=" flex justify-center items-center text-gray-500 text-[13px] mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">{copyRightIcon} 2025 - 2026</span>
      </p>
    </div>
  );
};

export default Navbar;