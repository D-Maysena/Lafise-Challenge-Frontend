"use client";

import { useState } from "react";

const TableTransactions = ({ transactions }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredTransactions = transactions.filter((t) => {
    const transactionDate = new Date(t.transaction_date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && end) return transactionDate >= start && transactionDate <= end;
    if (start) return transactionDate >= start;
    if (end) return transactionDate <= end;
    return true; 
  });

  return (
    <div className="w-full overflow-x-auto">
      {/* Filtros de fecha */}
      <div className="flex gap-4 mb-4 items-center flex-wrap">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Desde:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded p-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Hasta:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded p-1"
          />
        </div>
        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
          }}
          className="bg-[#3B8668] text-white px-3 py-1 mt-4 rounded hover:bg-[#00593B]"
        >
          Limpiar
        </button>
      </div>

      <table className="w-full text-left border border-gray-200 text-sm">
        <thead className="text-[#8D918D] bg-gray-100">
          <tr>
            <th className="px-4 py-3 font-normal">Fecha</th>
            <th className="px-4 py-3 font-normal">Descripción</th>
            <th className="px-4 py-3 font-normal">Débito USD</th>
            <th className="px-4 py-3 font-normal">Balance USD</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((t, index) => (
              <tr key={index} className="odd:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  {new Date(t.transaction_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-4">{t.description}</td>
                <td className="px-4 py-4">
                  {t.transaction_type === "Debit"
                    ? t.amount.value.toFixed(2)
                    : "-"}
                </td>
                <td className="px-4 py-4">
                  {t.transaction_type === "Credit"
                    ? t.amount.value.toFixed(2)
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No hay transacciones
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
