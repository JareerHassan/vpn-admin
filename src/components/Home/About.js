import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const accordionData = [
  {
    number: "01",
    title: "Strategy",
    subtitle: "Vision & direction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-acordion-img1.jpg",
  },
  {
    number: "02",
    title: "Branding",
    subtitle: "Visual design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/02/business-acordion-img2.jpg",
  },
  {
    number: "03",
    title: "Marketing",
    subtitle: "Business performance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/02/business-acordion-img3.jpg",
  },
  {
    number: "04",
    title: "Planning",
    subtitle: "Data analysis",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/03/business-acordion-img4.jpg",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1 className="text-white mt-20 ms-5 text-2xl md:text-4xl font-semibold">About our work</h1>
      <div className="about-section mt-20">
        {accordionData.map((item, index) => (
          <div className={`accordion-tab ${activeIndex === index ? "active" : ""}`} key={index}>
            <div className="arrow-button" onClick={() => setActiveIndex(index)}>
              <FaArrowUp className={`arrow-icon rotate-45 ${activeIndex === index ? "rotated" : ""}`} />
            </div>

            <div className="tab-header flex">
            <span className="title">{item.title}</span>
            </div>

            {activeIndex === index && (
              <div className="tab-content">
                <div className="text">
                  <h3>{item.subtitle}</h3>
                  <p>{item.desc}</p>
                  <div className="mt-4 flex justify-start">
                    <button className="flex items-center font-medium gap-2 bg-white/20 text-white px-5 py-2 rounded-full hover:bg-white/30 transition">
                      View More <FaArrowUp size={18} className="rotate-45" />
                    </button>
                  </div>
                </div>
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
