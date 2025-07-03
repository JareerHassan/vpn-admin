import React from "react";
import { FaGlobe, FaArrowUp } from "react-icons/fa";

const Home = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[380px] md:h-[510px] overflow-hidden">
      {/* Background Video */}
      <video
        src="https://leroux.qodeinteractive.com/wp-content/uploads/2023/03/business-rev-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Flex Container */}
      <div className="absolute top-4 sm:top-10 md:top-16 left-0 right-0 z-10 flex justify-between items-start px-4 sm:px-6 md:px-10">
        {/* ✅ p tag moved down using mt-* */}
        <p className="animate-fade-left text-[#AFC1C5] text-sm sm:text-sm md:text-base font-medium leading-snug max-w-[50%] mt-20 sm:mt-16 md:mt-40 lg:ml-16 flex items-center gap-2">
          <FaGlobe className="text-base sm:text-lg md:text-xl text-[#AFC1C5]" />
          <span>
            Expertise advice for your
            <br />
            business plans
          </span>
        </p>

        {/* h1 tag (unchanged) */}
        <h1 className="animate-fade-up text-[#AFC1C5] text-right text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-[50%]">
          Achieve Results
          <br />
          <span className="text-[#69797D]">With</span> Modern
          <br />
          Ideas
          {/* Arrow facing top-right */}
          <div className="mt-3 flex justify-end group">
            <FaArrowUp className="text-[#AFC1C5] text-xl sm:text-8xl rotate-45 transition group-hover:animate-bounce" />
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Home;
