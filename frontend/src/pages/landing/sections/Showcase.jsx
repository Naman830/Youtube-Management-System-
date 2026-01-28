
import Slider from './Slider.jsx';

const Showcase = () => {
  return (
    <section className="showcase_section relative min-h-screen pt-24 pb-20 overflow-hidden text-white">
        <div className="showcase_container text-center px-5">
            <div className="showcase_text_container max-w-2xl mx-auto text-center mb-10">
                <p className="md:text-[22px] sm:text-[20px] md:leading-9 sm:leading-7 text-[18px] leading-5 font-regular mx-auto text-[var(--gray-color)] mb-2">Feature Showcase</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl md:leading-16 sm:leading-14 leading-10 max-w-3xl mx-auto font-bold">PRODUCTION SUITE</h1>
            </div>

            <div className="showcase_slider_container">
                <Slider />
            </div>
        </div>
    </section>
  )
}

export default Showcase