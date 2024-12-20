"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiPublicSpeaker } from "react-icons/gi";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiMail,
  FiFeather,
  FiCalendar,
} from "react-icons/fi";
import Link from "next/link";

const menuItems = [
  {
    name: "home",
    label: "Home",
    href: "/",
    icon: <FiHome />,
  },
  {
    name: "about",
    label: "About",
    href: "/about",
    icon: <FiInfo />,
  },
  {
    name: "themes",
    label: "Themes",
    href: "/themes",
    icon: <FiFeather />,
  },
  {
    name: "speakers",
    label: "Speakers",
    href: "/speakers",
    icon: <GiPublicSpeaker />,
  },
  {
    name: "calendar",
    label: "Calendar",
    href: "/calendar",
    icon: <FiCalendar />,
  },
  {
    name: "contact",
    label: "Contact",
    href: "/contact",
    icon: <FiMail />,
  },
  {
    name: "register",
    label: "Register",
    href: "https://www.theheritage.ac.in/events/SCEIC.aspx",
    icon: <FiBriefcase />,
    isButton: true,
  },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Set the active menu based on the current pathname
    const currentPath = window.location.pathname;
    const activeItem = menuItems.find((item) => item.href === currentPath);
    setActiveMenu(activeItem ? activeItem.name : "");
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <nav className="bg-gray-800 text-white">
      {/* Desktop and Mobile Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          SCEIC - 2025
        </Link>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 ${
                activeMenu === item.name
                  ? "text-yellow-400"
                  : "hover:text-gray-400"
              } ${
                item.isButton
                  ? "bg-indigo-600 text-white py-2 px-4 rounded-full"
                  : ""
              }`}
              target={item.isButton ? "_blank" : "_self"} // Open register link in a new tab
              rel="noopener noreferrer"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-900 text-white p-6 z-50`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="space-y-4 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={toggleMenu}
                className={`flex items-center space-x-2 ${
                  activeMenu === item.name
                    ? "text-yellow-400"
                    : "hover:text-gray-400"
                } ${
                  item.isButton
                    ? "bg-indigo-600 text-white py-2 px-4 rounded-full"
                    : ""
                }`}
                target={item.isButton ? "_blank" : "_self"} // Open register link in a new tab
                rel="noopener noreferrer"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavMenu;
