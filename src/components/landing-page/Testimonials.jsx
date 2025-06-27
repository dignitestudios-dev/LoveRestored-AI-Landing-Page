"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import ReactStars from "react-stars";
import RandomHeartIconsTestimonials from "./RandomHeartIconsTestimonials";

const ReviewsCard = ({ content }) => (
  <div className="backdrop-blur-[4px] sm:ms-5 ms-3 sm:min-h-[150px] min-h-[220px] max-w-[420px] sm:w-full w-[180px] rounded-xl sm:p-6 p-3 bg-white/5 border border-white/10 text-white flex flex-col justify-center">
    <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between justify-start sm:gap-4 sm:mb-3">
      <div className="flex items-center sm:gap-4 gap-2">
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
    <p className="text-[#8A8F98] sm:mt-3 mt-1 font-light sm:text-base text-xs">
      {content.review}
    </p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      imgPath: "1.webp",
      name: "Emily Johnson",
      review:
        "LoveRestoredAI helped me understand my relationship better than any therapist ever did. It gave me clarity when I needed it the most.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "1.webp",
      name: "James Anderson",
      review:
        "I was skeptical at first, but the advice felt deeply personal and accurate. This AI actually helped save my relationship.",
      rating: 4.6,
      gender: "male",
    },
    {
      imgPath: "2.webp",
      name: "Olivia Brown",
      review:
        "I felt completely seen and heard. The insights from LoveRestoredAI were thoughtful, comforting, and spot on.",
      rating: 5.0,
      gender: "female",
    },
    {
      imgPath: "2.webp",
      name: "Michael Thompson",
      review:
        "The emotional intelligence this platform shows is incredible. It helped me reconnect with my partner on a deeper level.",
      rating: 4,
      gender: "male",
    },
    {
      imgPath: "3.webp",
      name: "Sophia Martinez",
      review:
        "I used LoveRestoredAI during a breakup and it honestly helped me heal. It’s like having a wise best friend with you.",
      rating: 4.9,
      gender: "female",
    },
    {
      imgPath: "3.webp",
      name: "William Garcia",
      review:
        "Navigating love isn't easy, but this AI made it feel possible. Every suggestion felt respectful and meaningful.",
      rating: 4.4,
      gender: "male",
    },
    {
      imgPath: "4.webp",
      name: "Isabella Davis",
      review:
        "It’s comforting to have guidance that doesn't judge you. LoveRestoredAI gave me the strength to express my feelings honestly.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "4.webp",
      name: "Benjamin Miller",
      review:
        "I thought I had lost my connection with my wife. This AI gave me practical and emotional tools to bring us closer again.",
      rating: 4.8,
      gender: "male",
    },
    {
      imgPath: "5.webp",
      name: "Mia Wilson",
      review:
        "Not just advice, but advice that feels tailored to your heart. LoveRestoredAI changed the way I think about love.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "5.webp",
      name: "Ethan Moore",
      review:
        "I’ve read tons of self-help books, but this was different. It listened, adapted, and truly understood my situation.",
      rating: 4.7,
      gender: "male",
    },
    {
      imgPath: "6.webp",
      name: "Ava Taylor",
      review:
        "Whether it's dating or healing, this AI really knows what it’s doing. It gave me the courage to open up again.",
      rating: 4,
      gender: "female",
    },
    {
      imgPath: "6.webp",
      name: "Noah Jackson",
      review:
        "It felt like therapy and coaching in one place. I never thought an AI could feel this emotionally intelligent.",
      rating: 4.5,
      gender: "male",
    },
    {
      imgPath: "7.webp",
      name: "Charlotte White",
      review:
        "Breakups are hard, but LoveRestoredAI made me feel less alone. Its advice was gentle, direct, and incredibly helpful.",
      rating: 4.3,
      gender: "female",
    },
    {
      imgPath: "7.webp",
      name: "Lucas Harris",
      review:
        "I used this platform before a serious talk with my partner. It helped me approach the situation with compassion and clarity.",
      rating: 4,
      gender: "male",
    },
    {
      imgPath: "8.webp",
      name: "Amelia Clark",
      review:
        "It helped me navigate both conflict and connection. I feel stronger, wiser, and more secure in my relationship now.",
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
          <Marquee direction="left" speed={20}>
            {testimonials.slice(0, 5).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </Marquee>
        </div>

        <div className="sm:mt-5 mt-3">
          <Marquee direction="right" speed={20}>
            {testimonials.slice(6, 10).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </Marquee>
        </div>

        <div className="sm:mt-5 mt-3">
          <Marquee direction="left" speed={20}>
            {testimonials.slice(11, 15).map((content, index) => (
              <ReviewsCard key={index} content={content} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
