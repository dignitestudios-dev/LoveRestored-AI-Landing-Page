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
          You Already Know What's Wrong.
          <br className="sm:block hidden" /> Now You Have What Fixes It.
        </h1>
        <p className="text-center sm:mt-10 mt-6 text-[#CCCCCC]">
          The arguments. The silence. The same painful loop on repeat. You've
          known for a while — something <br className="sm:block hidden" /> has
          to change. LoveRestored.AI is the relationship coach in your pocket
          that meets you in the <br className="sm:block hidden" /> exact
          moment’s words fail, fights escalate, and connection slips. Real-time
          tools. <br className="sm:block hidden" /> Personalized guidance. Real
          change, starting tonight.
        </p>
        <p className="text-center sm:mt-10 text-[13px] text-[#CCCCCC]">
          Free to download • iOS & Android • Real help in 60 seconds.
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
