import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Kai | Personal Portfolio",
  description: "Kai is a frontend developer with some backend experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} font-rubik text-brand-900 bg-brand-100 box-border dark:bg-none dark:bg-darkMode-800 dark:text-snow-500`}
      >
        <div className="bg-brand-200 absolute -z-10 rounded-full w-48 h-48 top-20 -left-10 blur-3xl sm:w-96 sm:h-96 sm:blur-[10rem]" />
        <div className="bg-brand-200 absolute -z-10 rounded-full w-48 h-48 -bottom-10 right-10 blur-3xl sm:w-96 sm:h-96 sm:blur-[10rem]" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
