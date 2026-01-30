import React from "react";
import { IoCheckbox } from "react-icons/io5";

const TrustItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3 text-gray-300 w-fit">
      <IoCheckbox className="text-[#db0000] text-[20px] leading-6 flex-shrink-0" />
      <span className="text-base text-[20px] leading-6">{text}</span>
    </div>
  );
};
export default TrustItem;
