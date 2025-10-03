import TableTransactions from "../TableTransactions";

const MisTransacciones = () => {
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
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Mis transacciones</h2>

      <div className="flex gap-20">
        <div className="bg-[#EDF5F2] p-2 w-30 h-10 rounded-xl text-[#3B8668] flex justify-center">
          <span>Movimientos</span>
        </div>
        <div className=" p-2 w-30 h-10 rounded-mb flex justify-center">
          <span>Estado</span>
        </div>
        <div className=" p-2 w-30 h-10 rounded-mb flex justify-center">
          <span>Detalle</span>
        </div>
        <div className=" p-2 w-50 h-10 rounded-mb ">
          <span>Fondo no disponible</span>
        </div>
      </div>
      <div className="mt-7" >

      <TableTransactions transactions={transactions} />

      </div>
    </div>
  );
};

export default MisTransacciones;
