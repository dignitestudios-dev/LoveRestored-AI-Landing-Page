import React from "react";
import RandomHeartIcons from "./RandomHeartIcons";
import Image from "next/image";
import StoreButtons from "./StoreButtons";

const Hero = () => {
  return (
    <div className="max-w-[1440px] px-10 lg:pt-36 pt-14 w-full flex justify-center items-center relative">
      <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[260px] absolute top-[200px] z-[-1]" />

      <RandomHeartIcons />

      <div>
        <h1 className="md:text-[60px] sm:text-[40px] text-[30px] sm:leading-[120%] leading-[110%] font-bold text-center">
          Because We Pride Ourselves <br className="sm:block hidden" /> On Building Bridges and <br className="sm:block hidden" />{" "}
          Strengthening Bonds{" "}
        </h1>
        <p className="text-center sm:mt-10 mt-6 text-[#CCCCCC]">
          Our app delivers expert-level advice powered and designed to make
          navigating your <br className="md:block hidden" /> relationship healthier but smarter.
        </p>

        <div className="mt-5 flex sm:gap-5 gap-3 justify-center">
          <StoreButtons />
        </div>

        <div className="w-full flex justify-center">
          <Image
            src={"/images/Hero.webp"}
            alt="LoveRestored.AI"
            width={800}
            height={630}
            className="sm:mt-24 mt-16 sm:ms-14 ms-6 max-w-[95%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
