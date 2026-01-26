import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../../assets/images/dashboard_hero.png";

const Hero = () => {
  return (
    <section className="hero_section relative min-h-screen pt-24 pb-20 overflow-hidden bg-black text-white">
      <div className="hero_container flex flex-col items-center text-center">
        <div className="hero_animation_container">
          <div className="hero_animation max-w-3xl">
            <img src={Dashboard} alt="Dashboard Preview" className="img" />
          </div>
        </div>
        <div className="hero_heading  -mt-12 mb-6">
          <h1 className="hero_heading_text text-7xl leading-16 mb-5 max-w-3xl mx-auto font-bold">
            RUN YOUR CHANNEL LIKE A STUDIO
          </h1>
          <p className="hero_subheading_text text-[22px] leading-9 max-w-[540px] font-regular mx-auto text-[var(--gray-color)]">
            Professional production tracking, ideation, and SOPs for serious
            creators. Stop guessing, Start scaling.
          </p>
        </div>

        <div className="hero_btn_conatiner flex gap-6 itmes-center justify-center">
          <Link to="/" className="hero_btn_start">
            START FREE
          </Link>
          <Link to="/" className="hero_btn_video">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
