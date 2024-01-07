import React from "react";
import Profile from "../components/profile_picture";
import NavBar from "../components/navbar";
import HeroSection from "@/components/HeroSection";
import Hero from "../components/hero";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      {/* <HeroSection />
      <Profile/>
      <about /> */}
    </React.Fragment>
  );
};

export default Home;
