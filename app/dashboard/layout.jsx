import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// const DashboardLayout = ({ children }) => {
//   return (
//     <main className="dashboard">
//       <Sidebar />
//       <MobileNav />
//       <div className="dashboard-container bg-dark">
//         <div className="wrapper">{children}</div>
//       </div>

//       <Toaster />
//     </main>
//   );
// };
// export default DashboardLayout;

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 px-5">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
