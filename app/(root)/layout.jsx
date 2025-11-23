import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import LenisProvider from "@/providers/LenisProvider";

export default function RootLayout({ children }) {
  return (
    <LenisProvider>
      <main>
        <Header />
        {children}
        <Footer />

        <div className="full-grid-bg corner-mask fixed inset-0 z-0" />
      </main>
    </LenisProvider>
  );
}
