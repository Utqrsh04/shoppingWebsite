import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/HeroSection/Hero";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default LandingPage;
