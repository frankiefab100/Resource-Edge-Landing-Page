import React from "react";
import HeroIllustration from "/images/hero-illustration.png";
import "../../styles/css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Throw paperwork into the trash where <br />
          it belongs.
        </h1>
        <p>
          Eliminate all the hassle involved in managing <br />
          people operations by automating it.
        </p>
      </div>
      <div className="hero-right">
        <img src={HeroIllustration} alt="hero-illustration" />
      </div>
    </section>
  );
};

export default Hero;
