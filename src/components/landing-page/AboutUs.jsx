import React from "react";
import StoreButtons from "./StoreButtons";
import Image from "next/image";
import RandomHeartIconsAbout from "./RandomHeartIconsAbout";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="max-w-[1440px] sm:px-10 px-4 grid lg:grid-cols-2 gap-10 md:mt-32 sm:my-20 my-12 items-center relative"
    >
      <RandomHeartIconsAbout />

      <div>
        <h1 className="sm:text-[50px] text-[30px] leading-[120%] font-bold">
          Why This App Exists
        </h1>

        {/* <p className="md:mt-6 mt-3 text-[#CCCCCC]">
          At <b className="text-(--primary-light)"> LoveRestored.AI </b>, we
          believe that every relationship—no matter how broken, distant, or
          misunderstood—has the potential to be restored, reignited, and
          reimagined. We are more than just an app; we are a movement designed
          to help couples rediscover emotional connection, improve
          communication, and reignite passion through the power of{" "}
          <b className="text-(--primary-light)">
            {" "}
            AI-driven relationship coaching.{" "}
          </b>
          <br />
          <br />
          Born from real-life challenges and inspired by the desire to provide
          meaningful, ongoing support to couples, LoveRestored.AI offers a
          personalized, private, and psychology-backed approach to relationship
          growth. Whether you're struggling with communication, feeling
          unappreciated, or simply want to rekindle the romance, our app meets
          you where you are and helps guide you to where you want to be.
        </p> */}
        <p className="md:mt-6 mt-3 text-[#CCCCCC]">
          You don't need another article telling you to "communicate better."
          You don't need another book gathering dust on the nightstand. You need
          help in the exact moment your relationship is on the line — when the
          words won't come, when the fight is escalating, when the silence has
          lasted too long. That's the gap LoveRestored.AI was built to close.
          Not theory. Not platitudes. Real-time guidance, in your hand, the
          second you need it.
        </p>

        <h2 className="text-[28px] leading-[120%] font-bold my-4">
          What This App Does for You
        </h2>

        <p className="text-[#CCCCCC]">
          Helps you say the right thing when the wrong thing is on the tip of
          your tongue. De-escalates fights before they explode into damage you
          can't take back. Gives you the language, the tools, and the
          perspective most people spend years in therapy trying to find. Whether
          you're fighting to save what you have, building something brand new,
          or rebuilding yourself first — this app walks with you. One moment at
          a time. Starting now.
        </p>

        <div className="mt-5 flex gap-5">
          <StoreButtons />
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[280px] absolute right-[30%] top-[30%] z-[-1]" />

        <Image
          src={"/images/about.webp"}
          alt="LoveRestored.AI"
          width={330}
          height={675}
          className="w-[570px] h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
