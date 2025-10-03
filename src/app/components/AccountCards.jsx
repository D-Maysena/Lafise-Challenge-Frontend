import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
const AccountCards = ({ accounts }) => {
  return (
    <div className="ml-4 mt-3 flex flex-wrap gap-4">
      {accounts.map((a, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white flex items-start justify-between w-[280px]
  transform transition-transform duration-200 hover:scale-105"
        >
          <div className="flex flex-col gap-1">
            <span className="font-bold text-gray-800">
              {a.accountType} Cuenta
            </span>
            <div className="flex text-[#3B8668]">
              <div className="text-[#3B8668] bg-[#EDF5F2] rounded-sm px-2 py-0.5">
                <span>{a.number}</span>
              </div>
              <MdOutlineContentCopy className="mt-2 " size={14} />
            </div>
            <span className="font-bold text-lg text-gray-800 mt-2">
              {a.code} {a.balance}
            </span>
          </div>

          {a.accountType == "NIO" ? (
            <Image
              src="/NIO.png"
              width={40}
              height={40}
              alt="Logo NIO"
              className="object-contain -mt-2"
            />
          ) : (
            <Image
              src="/flag.png"
              width={40}
              height={40}
              alt="Logo NIO"
              className="object-contain -mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountCards;
