import { useTransactionsStore } from "@/store/useTransactionsStore";
import TableTransactions from "../TableTransactions";

const MisTransacciones = () => {
  const { transactions } = useTransactionsStore();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Mis transacciones</h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-7">
        <div className="bg-[#EDF5F2] p-2 flex-1 sm:w-30 h-10 rounded-xl text-[#3B8668] flex justify-center items-center">
          <span>Movimientos</span>
        </div>
        <div className="p-2 flex-1 sm:w-30 h-10 flex justify-center items-center bg-white ">
          <span>Estado</span>
        </div>
        <div className="p-2 flex-1 sm:w-30 h-10 rounded-xl flex justify-center items-center ">
          <span>Detalle</span>
        </div>
        <div className="p-2 flex-1 sm:w-50 h-10 rounded-xl flex justify-center items-center ">
          <span>Fondo no disponible</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <TableTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default MisTransacciones;
