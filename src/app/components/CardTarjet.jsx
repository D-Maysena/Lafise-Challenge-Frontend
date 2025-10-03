import Image from "next/image";

const CardTarjet = ({ tarjetas }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-4 ml-5">
      {tarjetas.map((t, index) => (
        <div
          key={index}
          className="relative w-[343px] h-[208.4px] rounded-[10px] overflow-hidden"
          style={{
            background: `linear-gradient(to right, ${t.gradientFrom}, ${t.gradientTo})`,
          }}
        >
          <Image
            src="/logo2.png"
            alt="Logo"
            width={86}
            height={28}
            className="absolute right-60 bottom-17 h-full object-contain"
          />
          <span className="absolute right-70 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(0, 4)}
          </span>
          <span className="absolute right-55 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(4, 8)}
          </span>
          <span className="absolute right-35 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(8, 12)}
          </span>
          <span className="absolute right-15 bottom-20 text-white z-10 text-xl ">
            {t.account_number.slice(12, 16)}
          </span>
          <span className="absolute right-63 bottom-5 text-white z-10 text-sm ">
            {t.owner}
          </span>
          <span className="absolute right-23 bottom-10 text-white z-10 text-[10px] ">
            Expires date:
          </span>
          <span className="absolute right-29 bottom-5 text-white z-10 text-[13px] ">
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
