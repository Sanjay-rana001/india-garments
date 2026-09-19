import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair", // Keeping variable name same to avoid breaking css
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-inter", // Keeping variable name same to avoid breaking css
});

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
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#111111]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
