import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Created by Next.JS to keep track of friends and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.className} h-full antialiased`}>
      <body className="min-h-full">
        <header>
          <Navbar />
        </header>
        <main className="w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
