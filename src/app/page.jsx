import Image from "next/image";
import CardTarjet from "./components/CardTarjet";
import AccountCards from "./components/AccountCards";
import TableTransactions from "./components/TableTransactions";

export default function Home() {
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

  const accounts = [
    { accountType: "NIO", code: "C$", number: "12345678", balance: "38,456" },
    { accountType: "USD", code: "$", number: "22345678", balance: "38,456" },
    { accountType: "NIO", code: "C$", number: "52345678", balance: "38,456" },
  ];

  const transactions = [
    {
      fecha: "14/11/2021",
      descripcion: "walmart",
      debitoUSD: "320.00",
      balanceUSD: "2,100",
    },
    {
      fecha: "14/11/2021",
      descripcion: "walmart",
      debitoUSD: "320.00",
      balanceUSD: "2,100",
    },
    {
      fecha: "14/11/2021",
      descripcion: "walmart",
      debitoUSD: "320.00",
      balanceUSD: "2,100",
    },
    {
      fecha: "14/11/2021",
      descripcion: "walmart",
      debitoUSD: "320.00",
      balanceUSD: "2,100",
    },
    {
      fecha: "14/11/2021",
      descripcion: "walmart",
      debitoUSD: "320.00",
      balanceUSD: "2,100",
    },
  ];

  return (
    <div>
      <main>
        <div className="flex items-center mt-10 ml-5">
          <span className="font-bold text-xl">Mis tarjetas</span>
        </div>
        <CardTarjet tarjetas={tarjetas} />
        <div className="flex items-center mt-10 ml-5">
          <span className="font-bold text-xl">Cuentas:</span>
        </div>
        <AccountCards accounts={accounts} />
        <div className="flex items-center justify-between mt-10 ml-5">
          <span className="font-bold text-xl">Transacciones recientes</span>
          <span className="font-medium text-[14px] mr-[50px] ">ver todas</span>
        </div>
        <div className="mt-3  p-5">
          <TableTransactions transactions={transactions} />
        </div>
      </main>
    </div>
  );
}
