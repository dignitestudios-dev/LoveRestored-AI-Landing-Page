"use client";
import React, { useState } from "react";
import Logo from "./icons/Logo";
import Link from "next/link";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1440px] md:px-10 sm:px-5 px-2 w-full flex justify-between items-center">
        <div className="lg:scale-100 md:scale-90 scale-75 sm:pt-0 pt-2">
          <Logo />
        </div>
        <ul className="lg:flex hidden gap-12">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About Us</Link>
          </li>
          <li>
            <Link href={"#features"}>Features</Link>
          </li>
          <li>
            <Link href={"#testimonials"}>Testimonials</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact Us</Link>
          </li>
        </ul>
        <div className="lg:flex hidden">
          <Button>Get the App</Button>
        </div>

        <button className="lg:hidden flex" onClick={() => setIsOpen(true)}>
          <HiOutlineMenuAlt3 size={32} className="text-(--primary-light)" />
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden p-12 fixed top-0 ${
          isOpen ? "left-0" : "-left-[100%]"
        } w-screen h-full bg-gray-900/20 z-50 backdrop-blur-2xl flex justify-center items-center transition-all duration-300`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 cursor-pointer "
        >
          <IoClose size={32} className="text-(--primary-light)" />
        </button>

        <ul className="font-bold text-2xl flex flex-col items-center gap-5">
          <li>
            <Link
              href={"#"}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"#features"}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href={"#testimonials"}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
