import Image from "next/image";
import Link from "next/link";

const NavLink = ({ item, isActive }) => {
  return (
    <li
      key={item.route}
      className={`group flex justify-center w-full whitespace-nowrap  bg-cover transition-all hover:bg-purple-100 hover:shadow-inner p-16-semibold ${
        isActive ? "border-l-4 border-l-white! text-white" : "text-white/90"
      }`}
    >
      <Link
        className="flex size-full gap-4 p-3 p-16-semibold"
        href={item.route}
      >
        <Image
          src={item.icon}
          alt="logo"
          width={24}
          height={24}
          className={`${isActive ? "brightness-200" : ""}`}
        />
        {item.label}
      </Link>
    </li>
  );
};
export default NavLink;
