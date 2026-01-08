import React from "react";
import Button from "../Button";
import GooglePlay from "../icons/GooglePlay";
import Apple from "../icons/Apple";
import Link from "next/link";

const StoreButtons = () => {
  return (
    <>
      <Link
        target="_blank"
        href={
          "http://play.google.com/store/apps/details?id=com.dignitestudios.loverestoredai"
        }
      >
        <Button varient={"transparent"}>
          <div className="flex sm:gap-3 gap-2 h-full items-center">
            <div>
              <GooglePlay />
            </div>
            <div className="w-full flex flex-col items-start justify-between">
              <p className="text-[6px] text-white/75 tracking-wider">
                GET IT ON
              </p>
              <p>Google Play</p>
            </div>
          </div>
        </Button>
      </Link>

      <Link
        target="_blank"
        href={"https://apps.apple.com/us/app/loverestored-ai/id6751412290"}
      >
        <Button varient={"transparent"}>
          <div className="flex sm:gap-3 gap-2 h-full items-center">
            <div>
              <Apple />
            </div>
            <div className="w-full flex flex-col items-start justify-between">
              <p className="text-[6px] text-white/75 tracking-wider">
                DOWNLOAD ON THE
              </p>
              <p>App Store</p>
            </div>
          </div>
        </Button>
      </Link>
    </>
  );
};

export default StoreButtons;
