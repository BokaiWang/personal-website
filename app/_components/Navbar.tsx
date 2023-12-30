"use client";
import Link from "next/link";
import { FaCat } from "react-icons/fa";
import React, { useState } from "react";
import classNames from "classnames";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Intro");
  const navLinks: { title: string; href: string }[] = [
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#contact" },
  ];
  return (
    <div className="sticky z-10 w-screen top-0 bg-brand-900 dark:bg-stone-800">
      <nav className="flex justify-between p-3 text-lg text-brand-100">
        <Link href={"/"}>
          <FaCat className="text-brand-500" />
        </Link>
        <ul className="flex gap-5 items-center">
          <ThemeToggle />
          <HamburgerMenu navLinks={navLinks} />
          <div className="hidden sm:flex sm:gap-5 sm:items-center">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className={classNames({
                    "rounded-2xl": true,
                    "py-1": true,
                    "px-4": true,
                    "transition-colors": true,
                    "focus:bg-brand-800": true,
                    "hover:bg-brand-800": true,
                    "bg-brand-800": activeSection === link.title,
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
