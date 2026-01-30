import React from "react";

const CreatorSteps = ({ step, heading, paragraph, icon }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="px-5 bg-[var(--gray-color)] py-5 rounded-[10px] border-2 border-[#756b6b] mb-4">{icon}</div>

      <span className="text-[var(--gray-color)] text-[18px] leading-5 font-regular">
        {step}
      </span>
      <h2 className="text-white text-3xl font-bold mb-2">{heading}</h2>
      <p className="text-[var(--gray-color)] text-[20px] leading-6 font-regular max-w-50">
        {paragraph}
      </p>
    </div>
  );
};

export default CreatorSteps;
