import { getUserById } from "@/actions/user.actions";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function SiteHeader() {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="ml-auto flex items-center gap-2 ">
          <div className=" flex items-center gap-4 px-3 rounded-md  ">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={20}
              height={20}
              className="size-4 md:size-6 "
            />
            <p className="md:text-xl text-sm">{user.creditBalance}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
