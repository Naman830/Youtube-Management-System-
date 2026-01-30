import React from "react";

const CreatorSteps = ({ step, heading, paragraph, icon }) => {
  return (
    <div className="flex items-center justify-center flex-row">
      <div>{icon}</div>

      <span>{step}</span>
      <h2 className="ml-4">{heading}</h2>
      <p className="ml-4">{paragraph}</p>
    </div>
  );
};

export default CreatorSteps;
