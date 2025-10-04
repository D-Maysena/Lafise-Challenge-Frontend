"use client";

import AccountCards from "../AccountCards";
import CardTarjet from "../CardTarjet";
import TableTransactions from "../TableTransactions";
import { useDashboardData } from "@/hooks/useDashboardData";

const Tablero = () => {
  const { user, accounts, transactions, isClient } = useDashboardData();

  const tarjetas = [
    {
      account_number: "1234567890123456",
      owner: "Mike Smith",
      expire_date: "09/25",
      gradientFrom: "#00593B",
      gradientTo: "#096C4B",
    },
    {
      account_number: "1234567890123456",
      owner: "Yasser Smith",
      expire_date: "09/25",
      gradientFrom: "#0B102E",
      gradientTo: "#121741",
    },
    {
      account_number: "1234567890123456",
      owner: "Mike Smith",
      expire_date: "09/25",
      gradientFrom: "#1F1F1F",
      gradientTo: "#272727",
    },
  ];

  return (
    <div>
      <div className="flex items-center  mt-5 ml-5">
        <span className="font-bold text-xl">Mis tarjetas</span>
      </div>
      <CardTarjet tarjetas={tarjetas} />

      <div className="flex items-center mt-10 ml-5">
        <span className="font-bold text-xl">Cuentas:</span>
      </div>
      {isClient && <AccountCards accounts={accounts} />}

      <div className="flex items-center justify-between mt-10 ml-5">
        <span className="font-bold text-xl">Transacciones recientes</span>
        <span className="font-medium text-[14px] mr-[50px] cursor-pointer hover:underline">
          ver todas
        </span>
      </div>
      <div className="mt-3 p-5">
        {isClient && <TableTransactions transactions={transactions} />}
      </div>
    </div>
  );
};

export default Tablero;
