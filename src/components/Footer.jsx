import React from "react";
import Logo from "./icons/Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#262626] sm:py-10 py-5 flex justify-center">
      <div className="max-w-[1440px] w-full px-10">
        <div className="w-full flex justify-between items-center">
          <div className="lg:scale-100 md:scale-90 md:block hidden">
            <Logo />
          </div>
          <div className="sm:w-fit w-full">
            <ul className="sm:w-fit w-full flex flex-wrap sm:gap-12 gap-6 sm:justify-start justify-center">
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#about"}>About Us</Link>
              </li>
              <li>
                <Link href={"#features"}>Features</Link>
              </li>
              {/* <li>
                <Link href={"#testimonials"}>Testimonials</Link>
              </li> */}
              <li>
                <Link href={"#contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:mt-16 mt-10 w-full flex sm:flex-row flex-col-reverse justify-between items-center sm:gap-0 gap-5">
          <p className="text-[#8A8F98] text-center">
            © 2025{" "}
            <span className="text-(--primary-light)">Love Restored.AI</span>.
            All rights reserved.
          </p>

          <div>
            <ul className="flex items-center gap-5 text-[#8A8F98]">
              <li>
                <p>Social Links: </p>
              </li>
              {/* <li>
                <Link href={"#"}>
                  <FaLinkedin className="text-xl" />
                </Link>
              </li> */}
              <li>
                <Link href={"https://x.com/LoveRestoredAI"}>
                  <FaXTwitter className="text-xl" />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://studio.youtube.com/channel/UCwtTxuBWGdYUrNNJpigBYXQ"
                  }
                >
                  <FaYoutube className="text-xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/loverestored_ai/"}>
                  <FaInstagram className="text-xl" />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61569133592087"
                  }
                >
                  <FaFacebook className="text-xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.pinterest.com/loverestoredai/"}>
                  <FaPinterest className="text-xl" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.tiktok.com/@loverestoredai?lang=en"}>
                  <FaTiktok className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
