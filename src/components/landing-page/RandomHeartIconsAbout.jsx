import Image from "next/image";
import React from "react";
import Heart from "../icons/Heart";
import HeartSmall from "../icons/HeartSmall";

const RandomHeartIconsAbout = () => {
  return (
    <>
      <div className="absolute z-[-1] top-0 right-[8%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-4 left-[20%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[20%] left-[48%] rotate-[320deg]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] top-24 right-[35%]">
        <HeartSmall />
      </div>

      <div className="absolute z-[-1] top-[83%] left-[30%] rotate-[320deg]">
        <HeartSmall />
      </div>

      {/* <div className="absolute z-[-1] top-[540px] right-[3%]">
        <HeartSmall />
      </div> */}

      <div className="absolute z-[-1] top-[95%] left-[8%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[88%] right-[16%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[90%] right-[38%] rotate-[320deg]">
        <Heart />
      </div>
    </>
  );
};

export default RandomHeartIconsAbout;
