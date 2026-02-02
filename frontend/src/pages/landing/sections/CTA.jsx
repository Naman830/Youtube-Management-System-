import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta_section relative h-full pb-5 pt-24 overflow-hidden text-white">
      <div className="cta_container text-center px-5 mx-auto max-w-7xl">
        <div className="cta_text_container text-center mb-10">
          <p className="md:text-[22px] sm:text-[20px] md:leading-9 sm:leading-7 text-[18px] leading-5 font-regular mx-auto text-[var(--gray-color)] ">
            Final CTA Section
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl md:leading-16 sm:leading-14 leading-10  font-bold mb-5">
            TAKE CONTROL OF YOUR CONTENT
          </h1>
          <p className="md:text-2xl sm:text-[22px] sm:leading-8 text-[20px] leading-6 font-regular mx-auto text-[var(--gray-color)] ">
            Join top creators building sustainable media businesses.
          </p>
        </div>

        <div className="mb-10">
          <Link to="/" className="btn_primary cta_landing_button">
            JOIN THE PLATFORM
          </Link>
        </div>

        <div className="CTA_links_text flex flex-wrap justify-center gap-6 mt-10 text-[var(--gray-color)] text[16px] leading-5 font-regular ">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Support</Link>
          <Link to="/">Carrers</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Terms</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
