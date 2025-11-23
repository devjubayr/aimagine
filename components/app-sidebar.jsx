"use client";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Logo from "./shared/Logo";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <li className="flex justify-center items-center cursor-pointer  gap-2 p-4">
          <UserButton afterSignOutUrl="/" showName />
        </li>
      </SidebarFooter>
    </Sidebar>
  );
}
