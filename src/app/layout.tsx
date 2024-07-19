import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhumex",
  description: "A Marketplace for natural products from northeast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <div>
          <Navbar/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
        </Providers>
      
      </body>
    </html>
  );
}
