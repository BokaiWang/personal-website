"use client";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Intro");
  const navLinks: { title: string; href: string }[] = [
    { title: "About", href: "/#about" },
    { title: "Experience", href: "/#experience" },
    { title: "Projects", href: "/#projects" },
    // { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#contact" },
  ];
  return (
    <div className="sticky z-10 w-screen top-0 bg-brand-900 dark:bg-darkMode-900">
      <nav className="flex justify-between p-3 text-lg text-snow-500">
        <Link href={"/"} className="flex justify-center items-center">
          <Image src={Logo} alt="" width={100} />
        </Link>
        <ul className="flex gap-5 items-center">
          <ThemeToggle />
          <HamburgerMenu navLinks={navLinks} />
          <div className="hidden sm:flex sm:gap-5 sm:items-center">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={classNames({
                    "rounded-2xl py-1 px-4 transition-colors hover:bg-brand-800 focus:bg-brand-800 dark:hover:bg-darkMode-600 dark:focus:bg-darkMode-600":
                      true,
                    "bg-brand-800 dark:bg-darkMode-600":
                      activeSection === link.title,
                  })}
                  href={link.href}
                  onClick={() => setActiveSection(link.title)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
