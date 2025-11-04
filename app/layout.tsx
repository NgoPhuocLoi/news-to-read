import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you need
  variable: "--font-sans-new",
  display: "swap",
});

export const metadata: Metadata = {
  title: "News to read",
  description: "A simple bookmark manager for your reading list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${space.variable}`}>
        <div className="container mx-auto font-sans">
          <div className="w-full p-4">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
