import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf3",
        },
      }}
    >
      <html lang="en" className="dark">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
