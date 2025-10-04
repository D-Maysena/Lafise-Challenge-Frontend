import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";

const CardTarjet = ({ tarjetas }) => {
    const { user } = useUserStore();
  console.log(user);
  
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-4 ">
      {tarjetas.map((t, index) => (
        <div
          key={index}
          className="relative w-80 h-[208.4px] rounded-[10px] overflow-hidden"
          style={{
            background: `linear-gradient(to right, ${t.gradientFrom}, ${t.gradientTo})`,
          }}
        >
          <Image
            src="/logo2.png"
            alt="Logo"
            width={86}
            height={28}
            className="absolute right-52 bottom-17 h-full object-contain"
          />
          <span className="absolute right-43 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(0, 4)}
          </span>
          <span className="absolute right-62 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(4, 8)}
          </span>
          <span className="absolute right-25 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(8, 12)}
          </span>
          <span className="absolute right-10 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(12, 16)}
          </span>
          <span className="absolute right-37 bottom-5 text-white z-10 text-sm ">
            {user?.full_name}
          </span>
          <span className="absolute right-14 bottom-10 text-white z-10 text-[10px] ">
            Expires date:
          </span>
          <span className="absolute right-18 bottom-5 text-white z-10 text-[13px] ">
            {t.expire_date}
          </span>
          <Image
            src="/iconoFondo.png"
            alt="IconoFondo"
            width={153}
            height={400}
            className="absolute right-0 h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};
export default CardTarjet;
