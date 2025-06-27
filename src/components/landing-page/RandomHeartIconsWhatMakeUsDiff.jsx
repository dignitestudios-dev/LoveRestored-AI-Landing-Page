import Image from "next/image";
import React from "react";
import Heart from "../icons/Heart";
import HeartSmall from "../icons/HeartSmall";

const RandomHeartIconsWhatMakeUsDiff = () => {
  return (
    <>
      <div className="absolute z-[-1] -top-4 right-[18%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-6 left-[25%] rotate-[320deg]">
        <Heart />
      </div>
    </>
  );
};

export default RandomHeartIconsWhatMakeUsDiff;
