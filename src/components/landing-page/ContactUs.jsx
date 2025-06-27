import React from "react";
import Location from "../icons/Location";
import Email from "../icons/Email";
import Phone from "../icons/Phone";
import Button from "../Button";
import RandomHeartIconsContact from "./RandomHeartIconsContact";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="w-fit flex md:flex-row flex-col-reverse md:gap-0 gap-5 pt-16 sm:mb-22 mb-12 sm:px-10 px-4 max-w-screen relative"
    >
      <RandomHeartIconsContact />

      <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[260px] absolute md:top-[50%] top-[60%] sm:left-[35%] left-0 z-[-1]" />

      <div className="sm:p-10 p-5 md:rounded-s-xl md:rounded-e-none rounded-xl contact-bg">
        <h1 className="sm:text-[32px] text-[30px] leading-[120%] font-bold">
          Contact Details
        </h1>
        <p className="mt-3 text-[#cccccc] text-sm">
          Have questions or feedback? Get in touch with our <br /> friendly
          support team for assistance. We're here to help!
        </p>

        <ul className="flex flex-col sm:gap-6 gap-3 mt-7">
          <li>
            <h3 className="mb-2 sm:text-[22px] font-bold">Email</h3>
            <div className="flex items-center gap-2">
              <Email />{" "}
              <a
                href="mailto:business.solutions@loverestoredai.com"
                className="text-[#cccccc] text-sm"
              >
                business.solutions@loverestoredai.com
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Email />{" "}
              <a href="mailto:support@loverestoredai.com" className="text-[#cccccc] text-sm">
                support@loverestoredai.com{" "}
              </a>
            </div>
          </li>
          <li>
            <h3 className="mb-2 sm:text-[22px] font-bold">Phone</h3>
            <div className="flex items-center gap-2">
              <Phone />{" "}
              <a href="tel:+1 (727) 459-8735" className="text-[#cccccc] text-sm">+1 (727) 459-8735</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="sm:p-10 p-5 bg-white/5 border border-s-0 border-white/10 text-white shadow-xl shadow-black/25 md:rounded-e-xl md:rounded-s-none rounded-xl backdrop-blur-[20px]">
        <h2 className="sm:text-[32px] text-[30px] leading-[120%] font-bold">
          Let’s Connect{" "}
        </h2>
        <p className="mt-3 text-[#cccccc] text-sm">
          Have questions or feedback? Get in touch with our friendly <br />{" "}
          support team for assistance. We're here to help!
        </p>

        <form className="grid grid-cols-2 gap-3 mt-7">
          <input
            type="text"
            id="firstName"
            name="firstName"
            required={true}
            placeholder="First Name"
            className="input-class"
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            required={true}
            placeholder="Last Name"
            className="input-class"
          />

          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="Email"
            className="col-span-full input-class"
          />

          <input
            type="phone"
            id="phone"
            name="phone"
            required={true}
            placeholder="Phone Number"
            className="col-span-full input-class"
          />

          <textarea
            name="message"
            id="message"
            required={true}
            placeholder="Message"
            className="col-span-full input-class !h-28 pt-[10px]"
          />

          <div className="col-span-full">
            <Button size="full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
