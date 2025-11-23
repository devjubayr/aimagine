import { Toaster } from "sonner";

const RootLayout = ({ children }) => {
  return (
    <main className="root">
      {/* <Sidebar />
      <MobileNav /> */}
      <div className="root-container bg-dark">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};
export default RootLayout;
