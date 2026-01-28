import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../../assets/images/dashboard_hero.png";
import { FaArrowRight } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="hero_section relative min-h-screen pt-24 pb-20 overflow-hidden text-white">
      <div className="hero_container flex flex-col items-center text-center px-5">
        <div className="hero_animation_container">
          <div className="hero_animation sm:max-w-3xl max-w-2xl mx-auto sm:mb-0 mb-5">
            <img src={Dashboard} alt="Dashboard Preview" className="img" />
          </div>
        </div>
        <div className="hero_heading  -mt-12 mb-6">
          <h1 className="hero_heading_text md:text-7xl sm:text-6xl text-4xl md:leading-16 sm:leading-14  leading-10 mb-5 max-w-3xl mx-auto font-bold">
            RUN YOUR CHANNEL LIKE A STUDIO
          </h1>
          <p className="hero_subheading_text md:text-[22px] sm:text-[20px] md:leading-9 sm:leading-7 text-[18px] leading-5 sm:max-w-[540px] max-w-[440px] font-regular mx-auto text-[var(--gray-color)]">
            Professional production tracking, ideation, and SOPs for serious
            creators. Stop guessing, Start scaling.
          </p>
        </div>

        <div className="hero_btn_conatiner flex sm:gap-6 gap-4 itmes-center justify-center sm:flex-row flex-col">
          <Link to="/" className="hero_btn_start centered_flex">
            START FREE{" "}
            <FaArrowRight className="inline-block -rotate-45 text-[18px]" />
          </Link>
          <Link to="/" className="hero_btn_video centered_flex">
            <CiPlay1 className="inline-block text-[22px]" /> See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
