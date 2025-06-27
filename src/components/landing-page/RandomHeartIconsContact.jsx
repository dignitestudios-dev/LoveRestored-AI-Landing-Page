import React from "react";
import Heart from "../icons/Heart";
import HeartSmall from "../icons/HeartSmall";

const RandomHeartIconsContact = () => {
  return (
    <>
      <div className="absolute z-[-1] lg:top-[55%] sm:top-[96%] top-[98%] xl:-left-[7%] md:-left-[2%] sm:left-2 left-0 rotate-[320deg]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-12 left-[2%] rotate-[320deg] scale-[140%]">
        <Heart />
      </div>

      <div className="absolute z-[-1] top-0 right-0">
        <Heart />
      </div>

      <div className="absolute z-[-1] bottom-0 -right-5">
        <HeartSmall />
      </div>
    </>
  );
};

export default RandomHeartIconsContact;
