import Navbar from "../../components/layout/Navbar";

import Hero from "./sections/Hero/Hero";
import Trust from "./sections/Trust/Trust";
import CreatorFlow from "./sections/CreatorFlow/CreatorFlow";
import Showcase from "./sections/Showcase/Showcase";
import CTA from "./sections/CTA/CTA";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <CreatorFlow />
        <Showcase />
        <CTA />
      </main>
    </>
  );
}
