import React from "react";
import Stars from "../icons/Stars";
import Target from "../icons/Target";
import Relation from "../icons/Relation";
import Game from "../icons/Game";
import RandomHeartIconsFeatures from "./RandomHeartIconsFeatures";

const Features = () => {
  return (
    <div id="features" className="max-w-[1440px] sm:px-10 px-4 relative">
      <RandomHeartIconsFeatures />

      <h1 className="sm:text-[50px] text-[30px] sm:leading-[120%] leading-[110%] font-bold text-center">
        The Features That <br className="sm:block hidden" /> Will Change How{" "}
        <br className="sm:block hidden" /> You Love
      </h1>
      <p className="mt-6 text-[#CCCCCC] text-center">
        This is where hope becomes equipment. Where wanting things to be better
        becomes the actual ability to make them better.{" "}
        <br className="sm:block hidden" />
        Four features doing the quiet, powerful work most relationships never
        get the chance to experience.
      </p>

      <div className="sm:my-22 my-12 grid lg:grid-cols-4 min-[540]:grid-cols-2 sm:gap-10 gap-6">
        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Stars />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            Scripted Apologies with Gift <br /> Suggestions{" "}
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            When you've hurt the person you love most, the words you need don't
            come easy — and the wrong ones make it worse. Tell the app what
            happened, and it crafts a sincere, situation-specific apology that
            opens the door instead of slamming it. It even suggests a thoughtful
            gift that proves you mean it. Stop fumbling for the right words.
            Start saying exactly what your partner needs to hear, exactly when
            they need to hear it.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Target />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            AI Coaching That's With You <br /> 24/7
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            A relationship coach available the second you need one — at the
            dinner table, in the car, in the dark at 2am when sleep won't come.
            Trained in relationship psychology, communication science, and
            emotional intelligence. Trust issues. Intimacy. Boundaries. Repair.
            Whatever you're carrying tonight, you finally have somewhere to take
            it. No appointment. No waiting list. No going through this alone
            anymore.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Relation />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            Challenges That Build Real <br /> Connection
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            Every day, a small intentional prompt to deepen your bond. Every
            week, a meaningful challenge designed for the relationship you're
            actively building. Earn rewards as you go. Track progress you can
            see. Watch what happens when love stops being passive and starts
            being a practice. The relationships that last aren't built in big
            moments. They're built in small ones, repeated on purpose.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Game />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            Bi-Monthly Relationship <br /> Assessments{" "}
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            Every two months, you and your partner complete a guided check-in
            built by relationship experts. The system compares your answers side
            by side, surfaces hidden alignment and silent friction, and delivers
            a personalized action plan for the next eight weeks. You can't fix
            what you can't see. You can't grow what you don't measure. Now
            you'll see all of it — and finally know exactly where to focus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
