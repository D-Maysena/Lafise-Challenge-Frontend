import Image from "next/image";

import { FaBars } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="bg-white" >
      <div className="flex items-center px-5">
        <FaBars size={20} className="mt-2" />

        <div className="flex items-center gap-4 ml-auto mt-2">
          <FaRegBell size={27} className="text-[#272727]"  />

          <div className="relative w-full max-w-sm">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full pl-10 pr-0 py-[5px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B8668]"
            />
          </div>
          <Image src="/foto.png" width={40} height={40} alt="foto" className="rounded-full"  priority />
        </div>
      </div>

      <hr className="border-gray-300 mt-5 w-[1100px]" />
    </div>
  );
};

export default Header;
