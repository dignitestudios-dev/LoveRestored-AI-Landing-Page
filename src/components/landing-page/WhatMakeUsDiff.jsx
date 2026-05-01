import React from "react";
import RandomHeartIconsWhatMakeUsDiff from "./RandomHeartIconsWhatMakeUsDiff";

const WhatMakeUsDiff = () => {
  const data = [
    {
      title: "AI Coaching That Actually Knows You",
      description:
        "Personalized, judgment-free guidance trained in relationship psychology and communication science. It learns your story, your patterns, your goals — then meets you with the exact insight you need, the moment you need it. No appointments. No waiting rooms. No 2am spirals alone.",
    },
    {
      title: "Real-Time Tools When It Matters Most",
      description:
        "Scripted apologies that actually land. Conflict-breakers that stop the spiral. De-escalation prompts that pull you back from the edge. Gift suggestions that prove repair, not just words. Built for the moments when getting it right is the difference between connection and collapse.",
    },
    {
      title: " Challenges That Make Growth Stick",
      description:
        "Daily prompts and weekly missions designed to turn connection into a habit instead of a hope. Earn rewards. Track real progress. Watch your relationship strengthen in ways you can actually feel — not someday, but week after week, on purpose.",
    },
    {
      title: " A Community That Gets It",
      description:
        "Anonymous chats. Private messaging. Real people walking the same hard road you're on right now. You're not the only one fighting for your relationship. You're not the only one figuring this out. You never have to do this in silence again.",
    },
    {
      title: "Date Nights, Reimagined",
      description:
        "Curated date ideas built around your city, your budget, and your vibe — so the spark doesn't die under the weight of dishes, deadlines, and forgotten anniversaries. Bring back the fun. Make the memory. Remember exactly why you chose each other.",
    },
    {
      title: "See Your Relationship Clearly",
      description:
        " Guided assessments that show exactly where you are, where you're growing, and where the silent friction lives. No guessing. No drifting. No more waking up five years from now wondering how you got so far apart. Just clarity, every step forward.",
    },
  ];

  return (
    <div
      id="what-make-us-diff"
      className="max-w-[1440px] sm:px-10 px-4 md:pt-32 sm:pt-20 pt-12 relative"
    >
      <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[260px] absolute top-[50%] sm:left-[35%] left-0 z-[-1]" />

      <RandomHeartIconsWhatMakeUsDiff />

      <h1 className="sm:text-[50px] text-[30px] sm:leading-[120%] leading-[110%] font-bold text-center">
        What You Get the Moment You Open the App{" "}
      </h1>
      {/* <p className="mt-6 text-[#CCCCCC] text-center">
        With tiered subscriptions, in-app experiences, and lifetime access
        options, we make it easy for couples at any stage to begin their journey
        of <br /> restoration. Whether you're dating, married, or somewhere in
        between—
        <b className="text-(--primary-light)">LoveRestored.AI</b> is here to
        help you build the relationship you both deserve.
      </p> */}
      <p className="mt-6 text-[#CCCCCC] text-center">
        Six tools built for the moments your relationship is actually made of —
        the hard ones, the hopeful ones, and the ones that{" "}
        <br className="sm:block hidden" /> decide everything. These aren't
        features. They're the things you'll wish you'd had years ago
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
