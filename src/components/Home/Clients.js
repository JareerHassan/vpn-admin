import React, { useState } from "react";
import { FaArrowUp, FaCheck } from "react-icons/fa";



const Clients = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-[#AFC1C5] text-2xl md:text-5xl font-semibold leading-snug">
              Long term planning for
              <br />
              <span className="text-[#85979B]">Unlimited Success</span>
            </h1>
            <div className="mt-4">
              <button className="flex items-center font-medium gap-2 bg-white/20 text-white px-5 py-2 rounded-full hover:bg-white/30 transition">
                View More <FaArrowUp size={18} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <section className=" py-16 px-6 text-white mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[#AFC1C5]   text-2xl md:text-5xl font-semibold">
              Analyse <span className=" text-2xl md:text-5xl font-semibold text-[#69797D]">&</span>{" "}
              <span className="font-bold text-[#69797D]">Reflect</span>
            </h1>

        <div className="grid sm:grid-cols-2 gap-8 mt-5">
  {/* LEFT LIST */}
  <div className="text-[#AFC1C5]">
    <h5 className="text-xl mb-4">Business Integration</h5>
    <ul className="space-y-2 list-none pl-0">
      {["Planning", "Analyzing", "Implementation", "Testing", "Evaluation"].map((item, i) => (
        <li key={i} className="flex gap-2 items-start">
          <FaCheck className="text-[#85979B] mt-1" />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT LIST */}
  <div className="text-[#AFC1C5]">
    <h5 className="text-xl mb-4">Web Development</h5>
    <ul className="space-y-2 list-none pl-0">
      {["Front-end", "Web designer", "Back-end", "Content developer", "Webmaster"].map((item, i) => (
        <li key={i} className="flex gap-2 items-start">
          <FaCheck className="text-[#85979B] mt-1" />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

          </div>

          {/* RIGHT SIDE - 2 CARDS */}
          <div className="flex flex-col md:flex-row ">
            {/* CARD 1 */}
            <div
              className="relative w-full min-h-[300px]  overflow-hidden shadow-lg bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url("https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-title-img.jpg")`,
              }}
            >
              <div className="absolute inset-0 bg-black/20 z-0" />
              <div className="relative z-10 p-6">
                <h5 className="text-[#AFC1C5] text-xl mb-2">Pilot Project</h5>
                <h1 className="text-[#69797D] text-4xl md:text-5xl font-medium">26,586%</h1>
              </div>
            </div>

            {/* CARD 2 - VIDEO BUTTON */}
            <div className="relative w-full min-h-[300px] bg-[#2b3940]  overflow-hidden shadow-lg flex items-center justify-center">
              {/* === Background Circles === */}
              <span className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-white/10 rounded-full z-0 animate-pulse"></span>
              <span className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-white/10 rounded-full z-0 animate-ping"></span>

              {/* === Background Play Icon SVG === */}
              <svg
                className="absolute top-5 right-5 w-24 h-24 opacity-10 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 24"
                fill="currentColor"
              >
                <path d="M18 12 0 24V0Z" />
              </svg>

              {/* === Foreground Image === */}
              <img
                src="https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-video-transparent.png"
                alt="video"
                className="w-[260px] z-10"
              />

              {/* === Play Button Opens Modal === */}
              <button
                onClick={() => setShowModal(true)}
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <span className="p-6 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 18 24"
                    fill="currentColor"
                  >
                    <path d="M18 12 0 24V0Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* === Modal === */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl rounded-xl overflow-hidden relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-4 text-black text-3xl font-bold z-10"
              >
                &times;
              </button>
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/124801644"
                  title="Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Clients;
