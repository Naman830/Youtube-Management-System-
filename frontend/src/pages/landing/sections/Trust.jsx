import React from "react";
import TrustItem from "./TrustItem";

const Trust = () => {
  return (
    <section className="trust_section relative h-full pb-10 pt-10 overflow-hidden text-white">
      <div className="trust_container text-center px-5 mx-auto py-10 rounded-2xl  border border-[#2a2a2a] ">
        <div className="trust_text_container  max-w-2xl mx-auto text-center mb-10">
          <p className="md:text-[22px] sm:text-[20px] md:leading-9 sm:leading-7 text-[18px] leading-5 font-regular mx-auto text-[var(--gray-color)] ">
            Trust & Privacy
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl md:leading-16 sm:leading-14 leading-10 max-w-3xl mx-auto font-bold">
            Your Channel is Safe
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 items-start justify-center
          "
        >
          <TrustItem text="Official YouTube API Verified" />
          <TrustItem text="Read-Only Data Access" />
          <TrustItem text="Zero “Growth Hacking” Bots" />
          <TrustItem text="AES-256 Encryption" />
        </div>
      </div>
    </section>
  );
};

export default Trust;
