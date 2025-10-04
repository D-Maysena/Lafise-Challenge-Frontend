"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";

import { FaBars } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const { user } = useUserStore();
  const { isCollapsed, toggleCollapse } = useSidebarStore();
  return (
    <div className="bg-white w-full px-4 sm:px-5">
      <div className="flex items-center">
        <FaBars size={20} className="mt-2" onClick={toggleCollapse} />
        <div className="flex items-center gap-4 ml-auto mt-2 flex-1 sm:flex-none">
          <FaRegBell size={27} className="text-[#272727]" />
          <div className="relative w-full max-w-sm">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full pl-10 pr-2 py-[5px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B8668]"
            />
          </div>
          <Image
            src={user?.profile_photo || "/foto.png"}
            width={40}
            height={40}
            alt="foto"
            className="rounded-full"
            priority
          />
        </div>
      </div>
      <hr className="border-gray-300 mt-5 w-full" />
    </div>
  );
};

export default Header;
