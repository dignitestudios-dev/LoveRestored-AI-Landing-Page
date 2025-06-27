import Image from "next/image";
import React from "react";
import Heart from "../icons/Heart";
import HeartSmall from "../icons/HeartSmall";

const RandomHeartIcons = () => {
  return (
    <>
      <div className="absolute z-[-1] lg:top-12 top-3 right-[9%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] lg:top-12 top-3 left-[9%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] lg:top-20 top-9 left-[35%] rotate-[320deg]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] lg:top-24 top-9 right-[35%]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] top-72 right-[16%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-72 left-[16%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[480px] left-[36%] rotate-[320deg]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] top-[540px] right-[3%]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] top-[560px] left-[3%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[88%] right-[16%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[90%] left-[16%] rotate-[320deg]">
        <Heart />
      </div>
    </>
  );
};

export default RandomHeartIcons;
