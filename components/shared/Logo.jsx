import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 md:py-2 ">
      <Image
        src="/logo.png"
        className="rounded-[10px]"
        alt="logo"
        width={40}
        height={40}
      />
      <div className="font-poppins font-semibold">
        <h2 className="flex text-xl capitalize">
          <span className="">a</span>
          <span className="bg-linear-to-tl from-blue-primary to-blue-secondary bg-clip-text text-transparent uppercase">
            imagin
          </span>
        </h2>
        <p className=" capitalize text-nowrap text-[12px] font-medium opacity-70 -mt-[3px]">
          Instant AI • pro quality
        </p>
      </div>
    </div>
  );
};
export default Logo;
