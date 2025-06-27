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
        App Features
      </h1>
      <p className="mt-6 text-[#CCCCCC] text-center">
        Platform bridges the gap between traditional counseling and impersonal
        online advice by offering AI-powered coaching. <br /> and interactive
        tools to support relationships.
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
            When you've said or done the wrong thing, this feature helps you{" "}
            <b className="text-(--primary-light)">craft the perfect apology</b>
            —based on the situation and your partner’s emotional triggers. It
            even recommends thoughtful gift ideas that match the tone of your
            apology, helping you restore connection more meaningfully.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Target />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            AI-Powered Relationship <br /> Coaching{" "}
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            Get instant, personalized advice from our AI coach trained in{" "}
            <b className="text-(--primary-light)">
              relationship psychology and communication techniques.
            </b>
            Whether it’s about trust, intimacy, or boundaries, the AI tailors
            its guidance to your relationship history and current concerns.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[124px] w-[124px] rounded-xl flex justify-center items-center bg-white/5 border border-white/10 text-white">
            <Relation />
          </div>
          <h3 className="mt-6 text-lg font-bold text-center">
            Gamified Relationship <br /> Challenges{" "}
          </h3>
          <p className="mt-2 text-sm text-center text-[#cccccc]">
            Keep love exciting with{" "}
            <b className="text-(--primary-light)">
              {" "}
              daily and weekly challenges{" "}
            </b>{" "}
            that are fun, intentional, and tailored to your relationship goals.
            Earn rewards, track progress, and watch your bond grow stronger
            through shared experiences and healthy habits.
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
            Every two months, you and your partner will complete a{" "}
            <b className="text-(--primary-light)">
              {" "}
              guided relationship check-in.{" "}
            </b>{" "}
            Our system compares your answers, highlights areas of alignment or
            concern, and provides an action plan for continued growth and
            emotional connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
