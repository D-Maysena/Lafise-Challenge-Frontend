const TableTransactions = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-200 text-sm">
        <thead className="text-[#8D918D]  ">
          <tr>
            <th className="px-4 py-3 font-normal">Fecha</th>
            <th className="px-4 py-3 font-normal">Descripción</th>
            <th className="px-4 py-3 font-normal">Débito USD</th>
            <th className="px-4 py-3 font-normal">Balance USD</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td className="px-4 py-4">{t.fecha}</td>
              <td className="px-4 py-4">{t.descripcion}</td>
              <td className="px-4 py-4">{t.debitoUSD}</td>
              <td className="px-4 py-4">{t.balanceUSD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
