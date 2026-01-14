"use client";

import React from "react";
import ReactStars from "react-stars";
import RandomHeartIconsTestimonials from "./RandomHeartIconsTestimonials";
import CustomMarquee from "../CustomMarquee";

const ReviewsCard = ({ content }) => (
  <div className="backdrop-blur-[4px] sm:ms-5 ms-3 min-w-[220px] w-[220px] sm:min-w-[320px] sm:w-[320px] md:min-w-[440px] md:w-[440px] rounded-xl sm:p-6 p-3 bg-white/5 border border-white/10 text-white flex flex-col justify-center">
    <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-4">
      <div className="flex items-center gap-2">
        <div
          className="border-2 border-(--primary-light) w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(/images/testimonials/${content.gender}/${content.imgPath})`,
          }}
        />
        <h3 className="font-bold sm:text-xl text-base">{content.name}</h3>
      </div>

      <div>
        <ReactStars
          count={5}
          value={content.rating}
          edit={false}
          size={24}
          color2="#be8b36"
        />
      </div>
    </div>
    <p className="text-[#8A8F98] sm:mt-3 mt-1 font-light sm:text-base text-xs text-wrap">
      {content.review}
    </p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      imgPath: "1.webp",
      name: "Emily Johnson",
      review: "We were fighting every day. Now we actually talk again.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "1.webp",
      name: "James Anderson",
      review: "This stopped our arguments from exploding.",
      rating: 4.6,
      gender: "male",
    },
    {
      imgPath: "2.webp",
      name: "Olivia Brown",
      review: "I finally feel heard.",
      rating: 5.0,
      gender: "female",
    },
    {
      imgPath: "2.webp",
      name: "Michael Thompson",
      review: "We almost separated. This changed everything.",
      rating: 4,
      gender: "male",
    },
    {
      imgPath: "3.webp",
      name: "Sophia Martinez",
      review: "It helped us say what we couldn’t.",
      rating: 4.9,
      gender: "female",
    },
    {
      imgPath: "3.webp",
      name: "William Garcia",
      review: "I stopped walking on eggshells.",
      rating: 4.4,
      gender: "male",
    },
    {
      imgPath: "4.webp",
      name: "Isabella Davis",
      review: "It taught us how to repair instead of hurt each other.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "4.webp",
      name: "Benjamin Miller",
      review: "We feel like a team again.",
      rating: 4.8,
      gender: "male",
    },
    {
      imgPath: "5.webp",
      name: "Mia Wilson",
      review: "It saved our marriage.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "5.webp",
      name: "Ethan Moore",
      review: "I don’t feel alone anymore.",
      rating: 4.7,
      gender: "male",
    },
    {
      imgPath: "6.webp",
      name: "Ava Taylor",
      review: "It gave us words when we had none.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "6.webp",
      name: "Noah Jackson",
      review: "We stopped repeating the same fight.",
      rating: 4.5,
      gender: "male",
    },
    {
      imgPath: "7.webp",
      name: "Charlotte White",
      review: "It helped us reconnect emotionally.",
      rating: 4.3,
      gender: "female",
    },
    {
      imgPath: "7.webp",
      name: "Lucas Harris",
      review: "We actually feel close again.",
      rating: 4,
      gender: "male",
    },
    {
      imgPath: "8.webp",
      name: "Amelia Clark",
      review: "It de-escalated fights in real time.",
      rating: 4.9,
      gender: "female",
    },
  ];

  return (
    <div id="testimonials" className="sm:mb-10 mb-5 relative">
      <RandomHeartIconsTestimonials />

      <div className="px-10">
        <h1 className="sm:text-[50px] text-[30px] leading-[120%] font-bold text-center">
          Testimonials{" "}
        </h1>
        <p className="mt-6 text-[#CCCCCC] text-center">
          Platform bridges the gap between traditional counseling and impersonal
          online advice by offering AI-powered coaching. <br /> and interactive
          tools to support relationships.
        </p>
      </div>

      <div className="relative w-screen">
        <div className="absolute left-0 top-0 h-full lg:w-72 md:w-32 sm:w-20 w-12 bg-gradient-to-r from-[#181818] to-black/0 z-10" />
        <div className="absolute right-0 top-0 h-full lg:w-72 md:w-32 sm:w-20 w-12 bg-gradient-to-r from-black/0 to-[#181818] z-10" />

        <div className="mt-16">
          <CustomMarquee className="sm:space-x-5 space-x-3">
            {testimonials.slice(0, 5).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </CustomMarquee>
        </div>

        <div className="sm:mt-5 mt-3">
          <CustomMarquee direction="right">
            {testimonials.slice(6, 10).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </CustomMarquee>
        </div>

        <div className="sm:mt-5 mt-3">
          <CustomMarquee>
            {testimonials.slice(11, 15).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </CustomMarquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
