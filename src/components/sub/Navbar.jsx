import { copyRightIcon, navbarData } from "@/assets";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-16 sm:w-20 lg:w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-2 sm:px-4 py-6 sm:py-10 z-50 bg-white">
      <a href="/#home">
        <img 
          src='./software-developer.png' 
          alt="Logo" 
          className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
        />
      </a>
      <div className="flex flex-col gap-y-3 sm:gap-y-4"> 
        {navbarData.map((item, i) => (
          <a href={`/#${item.id}`} key={i} className="group flex flex-col items-center gap-y-1 sm:gap-y-2">
            <span className="text-xl sm:text-2xl text-yellow-600 group-hover:scale-125 transition-all">
              {item.icon}
            </span>
            <span className="text-[8px] sm:text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex justify-center items-center text-gray-500 text-[10px] sm:text-[12px] mt-4">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          {copyRightIcon} 2025 - 2026
        </span>
      </p>
    </div>
  );
};

export default Navbar;
