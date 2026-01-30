import CreatorSteps from "./CreatorSteps";
import { FaRegUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

const CreatorFlow = () => {
  return (
    <section className="creator_flow_section relative min-h-screen pt-24 pb-10 overflow-hidden  text-white">
      
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
        <div className="creator_steps_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative">

            <CreatorSteps
              icon={<FaRegUserCircle size={50} className="text-white" />}
              step="Step 1"
              heading="Sign Up"
              paragraph="Yes, Create your studio account in seconds."
              className=" md:col-span-4 col-span-12 "
            />
  
            <CreatorSteps
              icon={<FaYoutube size={50} className="text-white" />}
              step="Step 2"
              heading="Connect (Read-Only)"
              paragraph="Secure OAuth connection. We verify, we don't post."
              className="md:col-span-4 col-span-12 "
            />

            <CreatorSteps
              icon={<BsFillGrid1X2Fill size={50} className="text-[#db0000]" />}
              step="Step 3"
              heading="Manage"
              paragraph="Deploy SOPs and track production velocity."
              className="md:col-span-4 col-span-12 "
              isLast
              isGlow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorFlow;
