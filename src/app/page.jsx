import AboutUs from "@/components/landing-page/AboutUs";
import ContactUs from "@/components/landing-page/ContactUs";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import Testimonials from "@/components/landing-page/Testimonials";
import WhatMakeUsDiff from "@/components/landing-page/WhatMakeUsDiff";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatMakeUsDiff />
      <Features />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
