"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavSecondary({ items, ...props }) {
  const pathname = usePathname();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navLinks.slice(5).map((link) => {
            const isActive = link === pathname;
            return (
              <li
                key={link.route}
                className={`group flex justify-center w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-purple-100 hover:shadow-inner p-16-semibold ${
                  isActive ? "bg-purple-gradient text-white" : "text-white/90"
                }`}
              >
                <Link
                  className="flex size-full gap-4 p-4 p-16-semibold"
                  href={link.route}
                >
                  <Image
                    src={link.icon}
                    alt="logo"
                    width={24}
                    height={24}
                    className={`${isActive ? "brightness-200" : ""}`}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
