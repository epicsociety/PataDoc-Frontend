import React from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <about />
    </React.Fragment>
  );
};

export default Home;
