"use client";
import Link from "next/link";
import { FaCat } from "react-icons/fa";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks: { title: string; href: string }[] = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex justify-between p-3 text-2xl border-b-stone-500 border-b">
      <Link href={"/"}>
        <FaCat />
      </Link>
      <ul className="flex gap-5 items-center">
        <ThemeToggle />
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              className={classNames({
                "duration-300": true,
                "hover:text-orange-700": true,
                "text-orange-700": pathname === link.href,
              })}
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
