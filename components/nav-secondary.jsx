"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./shared/NavLink";

export function NavSecondary({ items, ...props }) {
  const pathname = usePathname();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navLinks.slice(5).map((item) => {
            const isActive = item.route === pathname;
            return <NavLink key={item.route} item={item} isActive={isActive} />;
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
