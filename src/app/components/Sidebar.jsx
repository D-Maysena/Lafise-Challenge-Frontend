"use client";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { BsGrid1X2Fill, BsPiggyBankFill } from "react-icons/bs";
import { FaUserCheck, FaMoneyCheck } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { MdOutlineChangeCircle, MdPriceCheck } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiSwitchHorizontal } from "react-icons/hi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function Sidebar() {
  const { activeOption, setActiveOption } = useSidebarStore();


  const menuOptions = [
    { id: "tablero", label: "Tablero", icon: <BsGrid1X2Fill /> },
    { id: "transferir", label: "Transferir", icon: <FaArrowRightArrowLeft /> },
    { id: "pagar", label: "Pagar", icon: <PiMoneyFill /> },
    {
      id: "mistransacciones",
      label: "Mis transacciones",
      icon: <FaUserCheck />,
    },
    { id: "gestionar", label: "Gestionar", icon: <MdOutlineChangeCircle /> },
    { id: "cheques", label: "Cheques", icon: <FaMoneyCheck /> },
    { id: "paganet", label: "Paganet", icon: <MdPriceCheck /> },
    { id: "administrar", label: "Administrar", icon: <FaUserCheck /> },
    {
      id: "ahorroautomatico",
      label: "Ahorro automático",
      icon: <BsPiggyBankFill />,
    },
    { id: "configuracion", label: "Configuración", icon: <IoMdSettings /> },
  ];

  return (
    <aside className="w-[260px] h-200 bg-[#F9FAF9] flex flex-col p-4 border-r-1 border-[#F3F5F3]">
      <div className="flex justify-center">
        <Image src="/logo.png" width={200} height={50} alt="Logo" priority />
      </div>
      <ul className="flex flex-col gap-2 mt-5 flex-1">
        {menuOptions.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveOption(item.id)}
            className={`flex items-center p-2 cursor-pointer rounded-lg ${
              activeOption === item.id
                ? "bg-[#EDF5F2] text-[#3B8668]"
                : "text-[#272727] hover:bg-[#EDF5F2] hover:text-[#3B8668]"
            }`}
          >
            {item.icon}
            <span className="ml-2 flex justify-between items-center w-full">
              {item.label}
              <FiChevronRight />
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-gray-300 mt-5" />

      <div className="mt-3 ">
        <div className="font-bold mb-2">Tasa de cambio</div>

        <div className="flex gap-2">
          <select className="border border-gray-300 rounded p-1 flex-1">
            <option value="NIO">Córdoba</option>
            <option value="USD">USD</option>
          </select>
          <select className="border border-gray-300 rounded p-1 flex-1">
            <option value="USD">USD</option>
            <option value="NIO">Córdoba</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-4 font-medium">
          <span>NIO: 35.1</span>
          <button className="bg-[#3B8668] text-white p-1 rounded-full hover:bg-[#2d6650] transition">
            <HiSwitchHorizontal />
          </button>
          <span>USD: 35.1</span>
        </div>

        <hr className="border-gray-300 mt-5" />

        <div className="mt-4 text-[12px] text-left text-gray-700 space-y-2 ml-2">
          <p>IP del Servidor: 190.432.574.23</p>
          <p>Último acceso: 2021/11/21 13:32:11</p>
        </div>
      </div>
    </aside>
  );
}
