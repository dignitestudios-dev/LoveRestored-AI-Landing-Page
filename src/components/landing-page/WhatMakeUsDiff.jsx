import React from "react";
import RandomHeartIconsWhatMakeUsDiff from "./RandomHeartIconsWhatMakeUsDiff";

const WhatMakeUsDiff = () => {
  const data = [
    {
      title: "Custom AI Coaching",
      description: "tailored to your unique relationship struggles.",
    },
    {
      title: "Gamified Challenges",
      description: "that make growth fun and rewarding.",
    },
    {
      title: "Real-Time Tools",
      description:
        "like scripted apologies, conflict resolution, de-escalation and gift suggestions.",
    },
    {
      title: "Community Support",
      description: "that track progress and suggest real solutions.",
    },
    {
      title: "Date Night Planning",
      description: "wherever you are, you can plan a night to remember.",
    },
    {
      title: "Data-Driven Assessments",
      description: "that track progress and suggest real solutions.",
    },
  ];

  return (
    <div id="what-make-us-diff" className="max-w-[1440px] sm:px-10 px-4 md:pt-32 sm:pt-20 pt-12 relative">
      <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[260px] absolute top-[50%] sm:left-[35%] left-0 z-[-1]" />

      <RandomHeartIconsWhatMakeUsDiff />

      <h1 className="sm:text-[50px] text-[30px] sm:leading-[120%] leading-[110%] font-bold text-center">
        What Makes Us Different{" "}
      </h1>
      <p className="mt-6 text-[#CCCCCC] text-center">
        With tiered subscriptions, in-app experiences, and lifetime access
        options, we make it easy for couples at any stage to begin their journey
        of <br /> restoration. Whether you're dating, married, or somewhere in
        between—
        <b className="text-(--primary-light)">LoveRestored.AI</b> is here to
        help you build the relationship you both deserve.
      </p>

      <div className="mt-12 sm:mb-22 mb-12 grid md:grid-cols-3 sm:grid-cols-2 sm:gap-5 gap-3 relative">
        {data.map((content, index) => (
          <div
            key={index}
            className="sm:min-h-[150px] rounded-xl flex flex-col sm:p-6 p-3 bg-white/5 border border-white/10 text-white"
          >
            <p className="font-bold sm:text-2xl text-xl">{content.title}</p>
            <p className="text-[#cccccc] mt-3">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakeUsDiff;
