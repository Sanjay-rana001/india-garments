import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "INDIA GARMENTS | Premium Fashion",
  description: "Sophisticated fashion-forward visual identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#111111]">
        <WishlistProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </WishlistProvider>
      </body>
    </html>
  );
}
