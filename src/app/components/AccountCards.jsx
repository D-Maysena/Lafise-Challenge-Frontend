import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

const AccountCards = ({ accounts }) => {
  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="mt-3 px-2 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start">
      {accounts.map((a, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white flex flex-col sm:flex-row items-start justify-between w-full max-w-[280px] transform transition-transform duration-200 hover:scale-105"
        >
          <div className="flex flex-col justify-items-start gap-1">
            <span className="font-bold text-gray-800">{a.currency} Cuenta</span>
            <div className="flex text-[#3B8668] items-center gap-1">
              <div className="text-[#3B8668] bg-[#EDF5F2] rounded-sm px-2 py-0.5">
                <span>{a.account_id}</span>
              </div>
              <MdOutlineContentCopy
                className="p-1 rounded hover:bg-gray-200 transition"
                title="Copiar cuenta"
                onClick={() => handleCopy(a.account_id)}
                size={22}
              />
            </div>
            <span className="font-bold text-lg text-gray-800 mt-2">
              {a.currency === "NIO" ? `C$ ${a.balance}` : `$ ${a.balance}`}
            </span>
          </div>

          <div className="mt-2 sm:mt-0">
            <Image
              src={a.currency === "NIO" ? "/NIO.png" : "/flag.png"}
              width={40}
              height={40}
              alt="Logo"
              className="object-contain -mt-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountCards;
