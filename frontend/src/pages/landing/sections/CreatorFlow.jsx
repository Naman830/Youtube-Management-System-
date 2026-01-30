import CreatorSteps from "./CreatorSteps";
import { FaRegUserCircle } from "react-icons/fa";

const CreatorFlow = () => {
  return (
    <section className="creator_flow_section relative min-h-screen pt-24 pb-24 overflow-hidden  text-white">
      <div className="creator_flow_container text-center px-5">
        <div className="creator_text_container max-w-7xl mx-auto text-center mb-10">
          <p className="md:text-[22px] sm:text-[20px] md:leading-9 sm:leading-7 text-[18px] leading-5 font-regular mx-auto text-[var(--gray-color)] mb-2">
            How It Works
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl md:leading-16 sm:leading-14 leading-10 font-bold">
            THE CREATOR FLOW
          </h1>
        </div>

        {/* Section-part-2 */}
        <div className="creator_flow_steps max-w-7xl mx-auto">
          <div className="creator_steps_container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-5">
            <CreatorSteps
              icon={<FaRegUserCircle size={50} className="text-white" />}
              step="Step 1"
              heading="Sign Up"
              paragraph="Create your studio account in seconds"
              className="md:col-span-4 col-span-12"
            />

            <CreatorSteps
              icon={<FaRegUserCircle size={50} className="text-white" />}
              step="Step 1"
              heading="Sign Up"
              paragraph="Create your studio account in seconds"
              className="md:col-span-4 col-span-12"
            />

            <CreatorSteps
              icon={<FaRegUserCircle size={50} className="text-white" />}
              step="Step 1"
              heading="Sign Up"
              paragraph="Create your studio account in seconds"
              className="md:col-span-4 col-span-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorFlow;
