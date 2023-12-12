import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import PageContainer from "./_components/PageContainer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-rubik bg-gradient-to-r from-amber-500 to-orange-200 dark:bg-none dark:bg-stone-800 dark:text-slate-300 box-border`}
      >
        <Navbar />
        <main className="p-3">{children}</main>
      </body>
    </html>
  );
}
