const CreatorSteps = ({ step, heading, paragraph, icon, isLast }) => {
  return (
    <div className="creator_step_props relative flex flex-col items-center text-center">
      {/* ICON */}
      <div className="creator-step__icon relative z-10 bg-[#1a1a1a] p-5 rounded-xl border border-[#756b6b] mb-4">
        {icon}
      </div>

      {/* LINE */}
      {!isLast && (
        <div className="hidden md:block absolute top-[42px] left-[60%]   w-[calc(100%-50px)]   ml-[10px] h-[4px] bg-gradient-to-r from-[#db0000] to-transparent" />
      )}

      <span className="text-[var(--gray-color)] text-lg">{step}</span>
      <h2 className="text-white text-3xl font-bold mb-2">{heading}</h2>
      <p className="text-[var(--gray-color)] text-lg max-w-xs">{paragraph}</p>
    </div>
  );
};
export default CreatorSteps;
