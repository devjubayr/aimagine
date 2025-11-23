import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
// 1. Import the dark theme from Clerk
import { dark } from "@clerk/themes";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata = {
  title:
    "AIMAGIN - Instant AI BG Filler | Image Generator | Image Quality Restore | BG Remove | Pro Quality",
  description:
    "Unleash your creative vision with imagino by AI. Freemium product. Professional quality, privacy-first Image Filler, Restore Image Quality and background removal powered by advanced AI technology.",
};

export default function RootLayout({ children }) {
  return (
    // 2. Add baseTheme: dark to ClerkProvider to strictly enforce dark theme on Clerk UI
    <ClerkProvider
      appearance={{
        baseTheme: dark, // <--- Add this line
        variables: {
          colorPrimary: "#000000",
        },
      }}
    >
      {/* 3. Add className="dark" to <html> tag to enforce dark theme on the rest of your app (Tailwind) */}
      <html lang="en" className="dark">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
