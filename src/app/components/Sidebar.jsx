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
import { useState } from "react";

export default function Sidebar() {
  const { activeOption, setActiveOption, isCollapsed } = useSidebarStore();

  const [fromCurrency, setFromCurrency] = useState("NIO");
  const [toCurrency, setToCurrency] = useState("USD");

  const exchangeRate = {
    NIO: 36.6,
    USD: 1,
  };

  const handleFromChange = (value) => {
    setFromCurrency(value);
    setToCurrency(value === "NIO" ? "USD" : "NIO");
  };

  const handleToChange = (value) => {
    setToCurrency(value);
    setFromCurrency(value === "NIO" ? "USD" : "NIO");
  };

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const menuOptions = [
    { id: "tablero", label: "Tablero", icon: <BsGrid1X2Fill /> },
    { id: "transferir", label: "Transferir", icon: <FaArrowRightArrowLeft /> },
    { id: "pagar", label: "Pagar", icon: <PiMoneyFill /> },
    { id: "mistransacciones", label: "Mis transacciones", icon: <FaUserCheck /> },
    { id: "gestionar", label: "Gestionar", icon: <MdOutlineChangeCircle /> },
    { id: "cheques", label: "Cheques", icon: <FaMoneyCheck /> },
    { id: "paganet", label: "Paganet", icon: <MdPriceCheck /> },
    { id: "administrar", label: "Administrar", icon: <FaUserCheck /> },
    { id: "ahorroautomatico", label: "Ahorro automático", icon: <BsPiggyBankFill /> },
    { id: "configuracion", label: "Configuración", icon: <IoMdSettings /> },
  ];

  return (
    <aside
      className={`bg-[#F9FAF9] flex flex-col p-4 border-r border-[#F3F5F3] h-full transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-full h-full sm:w-[260px]"
      }`}
    >
      <div className="flex  items-center mb-4">
        {!isCollapsed && (
          <Image src="/logo.png" width={320} height={10} alt="Logo" priority />
        )}
      </div>

      {/* Menú */}
      <ul className="flex flex-col gap-2 flex-1">
        {menuOptions.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveOption(item.id)}
            className={`flex items-center p-2 cursor-pointer rounded-lg transition-colors ${
              activeOption === item.id
                ? "bg-[#EDF5F2] text-[#3B8668]"
                : "text-[#272727] hover:bg-[#EDF5F2] hover:text-[#3B8668]"
            }`}
          >
            {item.icon}
            {!isCollapsed && (
              <span className="ml-2 flex justify-between items-center w-full">
                {item.label}
                <FiChevronRight />
              </span>
            )}
          </li>
        ))}
      </ul>

      {!isCollapsed && (
        <div className="mt-3 text-[12px] text-gray-700">
          <div className="font-bold mb-2">Tasa de cambio</div>

          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <select
              className="border border-gray-300 rounded p-1 flex-1"
              value={fromCurrency}
              onChange={(e) => handleFromChange(e.target.value)}
            >
              <option value="NIO">Córdoba</option>
              <option value="USD">USD</option>
            </select>

            <select
              className="border border-gray-300 rounded p-1 flex-1"
              value={toCurrency}
              onChange={(e) => handleToChange(e.target.value)}
            >
              <option value={toCurrency}>
                {toCurrency === "NIO" ? "Córdoba" : "USD"}
              </option>
            </select>
          </div>

          <div className="flex justify-between items-center font-medium gap-2 mb-3">
            <span>
              {fromCurrency}: {exchangeRate[fromCurrency]}
            </span>
            <button
              onClick={handleSwitch}
              className="bg-[#3B8668] text-white p-1 rounded-full hover:bg-[#2d6650] transition"
            >
              <HiSwitchHorizontal />
            </button>
            <span>
              {toCurrency}: {exchangeRate[toCurrency]}
            </span>
          </div>

          <hr className="border-gray-300 my-3" />
          <div className="space-y-1 ml-1">
            <p>IP del Servidor: 190.432.574.23</p>
            <p>Último acceso: 2021/11/21 13:32:11</p>
          </div>
        </div>
      )}
    </aside>
  );
}
