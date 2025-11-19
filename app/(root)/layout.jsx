import Sidebar from "@/components/shared/Sidebar";

const RootLayout = ({ children }) => {
  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNav/> */}
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};
export default RootLayout;
