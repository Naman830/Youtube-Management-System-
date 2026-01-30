const CreatorSteps = ({ step, heading, paragraph, icon, isLast, isGlow }) => {
  return (
    <div className="creator_step_props relative flex flex-col items-center text-center">
      {/* GLOW LAYER */}
      {isGlow && (
        <div className="absolute top-[32px] w-[90px] h-[90px] rounded-xl bg-red-600 blur-2xl opacity-70" />
      )}

      {/* ICON */}
      <div
        className={`
          creator-step__icon
          relative
          z-10
          p-5
          rounded-xl
          border
          mb-4
          transition-all
          duration-300
          ${
            isGlow
              ? "bg-[#831010] border-[#db0000] shadow-[0_0_25px_rgba(219,0,0,0.7)]"
              : "bg-[#1a1a1a] border-[#756b6b]"
          }
        `}
      >
        {icon}
      </div>

      {/* CONNECTOR LINE */}
      {!isLast && (
        <div className="hidden md:block absolute top-[42px] left-[50%] w-[calc(100%-20px)] ml-[10px] h-[2px] bg-gradient-to-r from-[#db0000] to-transparent" />
      )}

      <span className="text-[var(--gray-color)] text-lg">{step}</span>
      <h2 className="text-white text-3xl font-bold mb-2">{heading}</h2>
      <p className="text-[var(--gray-color)] text-lg max-w-60">{paragraph}</p>
    </div>
  );
};
export default CreatorSteps;
