"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
      onClick: () => setNavbarOpen(false),
    },
    {
      title: "About",
      path: "#about",
      onClick: () => setNavbarOpen(false),
    },
    {
      title: "Projects",
      path: "#projects",
      onClick: () => setNavbarOpen(false),
    },
    {
      title: "Contact",
      path: "#contact",
      onClick: () => setNavbarOpen(false),
    },
  ];

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <nav
      className={
        shadow
          ? "fixed top-0 left-0 right-0 shadow-xl z-10 bg-white bg-opacity-100"
          : "fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-100"
      }
    >
      <div className="flex container lg:py-3 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          onClick={() => setNavbarOpen(false)}
          className="text-2xl md:text-5xl text-[#070f4e] font-semibold"
        >
          <span className="text-[#3ab1c8]">FH</span>B
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-black hover:border-black"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-black hover:border-black"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
