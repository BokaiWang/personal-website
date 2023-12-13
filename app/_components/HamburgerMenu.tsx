"use client";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface Props {
  navLinks: { title: string; href: string }[];
}

const HamburgerMenu = ({ navLinks }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sm:hidden flex items-center">
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`${
          open ? "ease-linear duration-300 -translate-x-44" : ""
        } absolute z-10 top-3 -right-40 dark:bg-stone-700 bg-white flex items-start rounded-lg border border-white p-2`}
      >
        <div>
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
        </div>
        <button onClick={() => setOpen(false)}>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <button onClick={() => setOpen(true)}>
        <IoMenuSharp />
      </button>
    </div>
  );
};

export default HamburgerMenu;
