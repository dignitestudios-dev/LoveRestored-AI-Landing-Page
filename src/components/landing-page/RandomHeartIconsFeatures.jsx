import React from "react";
import Heart from "../icons/Heart";
import HeartSmall from "../icons/HeartSmall";

const RandomHeartIconsFeatures = () => {
  return (
    <>
      <div className="absolute z-[-1] -top-10 right-[9%] scale-[140%]"> 
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[15%] left-[9%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-0 left-[30%] rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-[5%] right-[30%]">
        <HeartSmall />
      </div>
    </>
  );
};

export default RandomHeartIconsFeatures;
