import React from "react";

const Trust = () => {
  return (
    <section className="trust_section relative h-full pb-10 pt-10 overflow-hidden bg-green-300 text-white">
      <div className="trust_container text-center px-5 mx-auto ">
        <div className="trust_text_container  max-w-2xl mx-auto text-center mb-10">
          <p className="md:text-[20px] sm:text-[18px] md:leading-8 sm:leading-6 text-[16px] leading-4 font-regular mx-auto text-[var(--gray-color)]">
            Trust & Privacy
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl md:leading-13 sm:leading-10 leading-8 font-bold">
            Your Channel is Safe
          </h1>
        </div>
        <div className="trust_checkbox_container"></div>
      </div>
    </section>
  );
};

export default Trust;
