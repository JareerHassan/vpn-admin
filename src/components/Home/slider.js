import React from 'react';
import { FaArrowUp,FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const slides = [
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img2.jpg",
    title: "Web Solution",
    text: "Development"
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img3.jpg",
    title: "Our Services",
    text: "Innovation"
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img4.jpg",
    title: "Virtual reality",
    text: "Creativity"
  },
  {
    img: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-home-slider-img1.jpg",
    title: "Market Research",
    text: "Marketing"
  }
];

const stats = [
  {
    svg: (
      <div className="w-20 h-20 flex items-center justify-center text-[#AFC1C5]">
        {/* Companies analyzed - Building Icon */}
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16">
          <rect x="10" y="2" width="44" height="60" rx="2" />
          <path d="M22 62V42H42V62" />
          <path d="M22 10H42M22 18H42M22 26H42" />
        </svg>
      </div>
    ),
    number: "19362+",
    label: "Companies analyzed"
  },
  {
    svg: (
      <div className="w-20 h-20 flex items-center justify-center text-[#AFC1C5]">
        {/* Strategy Icon - Target with arrow */}
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16">
          <circle cx="32" cy="32" r="30" />
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="10" />
          <path d="M32 2V32L52 12" />
        </svg>
      </div>
    ),
    number: "21921+",
    label: "Strategies planned"
  },
  {
    svg: (
      <div className="w-20 h-20 flex items-center justify-center text-[#AFC1C5]">
        {/* Projects released - Rocket icon */}
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16">
          <path d="M2 62L18 46M46 2C52 8 60 26 34 52C28 58 20 60 14 54C8 48 6 40 12 34C38 8 56 16 62 22" />
          <circle cx="44" cy="20" r="4" />
        </svg>
      </div>
    ),
    number: "19201",
    label: "Projects released"
  },
  {
    svg: (
      <div className="w-20 h-20 flex items-center justify-center text-[#AFC1C5]">
        {/* Satisfied clients - User Heart icon */}
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16">
          <circle cx="32" cy="18" r="12" />
          <path d="M10 58c0-12 12-18 22-18s22 6 22 18" />
          <path d="M46 24c2 0 4 2 4 4s-2 4-4 6l-4 4-4-4c-2-2-4-4-4-6s2-4 4-4 4 2 4 2 2-2 4-2z" />
        </svg>
      </div>
    ),
    number: "320+",
    label: "Satisfied clients"
  }
];


const Slider = () => {
  return (
    <div className="mt-40 px-4 w-full flex flex-col items-center">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-32 flex-wrap w-full">
        <div className="max-w-xl">
          <h1 className="text-[#AFC1C5] text-2xl md:text-3xl font-semibold">Tips for marketing & strategy</h1>
          <p className="text-[#85979B] text-sm mt-3 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-[#AFC1C5] text-sm sm:text-base font-medium leading-snug max-w-[90%] flex items-center gap-2 m-0 mt-2">
            <span>Our Services</span>
            <FaArrowUp className="text-base sm:text-lg md:text-xl text-[#AFC1C5] rotate-45" />
          </p>
          <hr className="w-28 border-gray-300 mt-1 mb-0" />
        </div>

        <div>
          <h1 className="text-[#AFC1C5] text-2xl md:text-4xl font-semibold">
            Our focus is on delivering<br />
            superior value to our<br />
            clients for company<br />
            modification.
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#69797D]">
            Providing sustainable<br />
            strategies that will<br />
            upgrade their business.
          </h1>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full mt-20 px-2">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.5}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.5 }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
<div className=' w-[450px]  border-r border-white/40 pr-[70px]'>
              <div className="relative w-full  h-[300px] overflow-hidden group shadow-md">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 text-white z-10">
                  <h5 className="text-2xl font-semibold relative inline-block">
                    {slide.title}
                    <span className="block h-[2px] bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </h5>
                  <p className="text-sm">{slide.text}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[5]"></div>
                <div className="absolute top-0 bottom-0 right-[-5px] w-[2px] bg-white/60 z-20"></div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Business Section Under Slider */}
     <div className="mt-28 max-w-7xl w-full px-2">
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="w-full lg:w-1/2">
      {/* Left side empty or image if needed */}
    </div>
    <div className="w-full lg:w-1/2 space-y-6">
      <div>
        <h3 className="text-[#AFC1C5] text-2xl md:text-3xl font-semibold">
          Digitize your business now with our best experts
        </h3>
        <p className="text-[#85979B] text-sm mt-3 font-medium">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> veniam.  </p>
      </div>

    {/* Static list with ticks */}
<div className="space-y-4 mt-4">
  <div className="flex items-start text-[#AFC1C5]">
    <FaCheck className="text-lg mr-3 mt-1" />
    <h6 className="text-base font-medium">Operations & Efficiency</h6>
  </div>
  <div className="flex items-start text-[#AFC1C5]">
    <FaCheck className="text-lg mr-3 mt-1" />
    <h6 className="text-base font-medium">Strategy work & accounting</h6>
  </div>
  <div className="flex items-start text-[#AFC1C5]">
    <FaCheck className="text-lg mr-3 mt-1" />
    <h6 className="text-base font-medium">Identity design specialists</h6>
  </div>
</div>
      <div className="pt-6">
        <h4 className="text-[#AFC1C5] text-xl font-semibold">
          Change your company image with our help
        </h4>
        <p className="text-[#85979B] text-sm mt-3 font-medium">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris nisi ut aliquip.        </p>
      </div>

      <div className="mt-4 flex justify-start">
            <button className="flex items-center font-medium gap-2 bg-white/20 text-white px-5 py-2 rounded-full hover:bg-white/30 transition">
              View More < FaArrowUp size={18} className='rotate-45' />
            </button>
          </div>
    </div>
  </div>
  
</div>

 <div className="mt-20 w-full flex flex-wrap justify-center gap-40 px-2">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center max-w-[180px]"
    >
      <div className="w-[100px] h-[100px] flex items-center justify-center  mb-6">
        {stat.svg}
      </div>
      <span className="text-[#AFC1C5] text-6xl font-semibold">{stat.number}</span>
      <h5 className="text-[#AFC1C5] text-base font-medium mt-2">{stat.label}</h5>
    </div>
  ))}
</div>

    <div>

      
    </div>

    </div>
  );
};

export default Slider;
