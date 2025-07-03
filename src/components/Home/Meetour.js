import React from "react";

const clients = [
  {
    id: 1,
    logo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client1.png",
    hoverLogo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client1-hover.png",
    bg: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client1-bg-img.jpg",
  },
  {
    id: 2,
    logo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client2.png",
    hoverLogo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client2-hover.png",
    bg: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/client-02-hover-bg.jpg",
  },
  {
    id: 3,
    logo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client3.png",
    hoverLogo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client3-hover.png",
    bg: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/client-03-hover-bg.jpg",
  },
  {
    id: 4,
    logo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client4.png",
    hoverLogo: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/business-client4-hover.png",
    bg: "https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/client-04-hover-bg.jpg",
  },
];

const Meetour = () => {
  return (
    <section className="w-full mt-20 py-16 px-[5.7%] border-b border-[#AFC1C54D]">
      <div className="text-center mb-12">
        <h2 className=" text-2xl md:text-4xl font-semibold text-[#AFC1C5]">
          Meet our clients
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ">
        {clients.map((client) => (
          <div
            key={client.id}
className="relative group overflow-hidden cursor-pointer h-[300px] border-[0.1px] border-[#85979B]"
          >
            {/* Background image revealed on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-110"
              style={{ backgroundImage: `url(${client.bg})` }}
            ></div>

            {/* Color overlay slide effect */}
            <div className="absolute inset-0  bg-[#223136] z-10 transform transition-transform duration-700 group-hover:-translate-y-full"></div>

            {/* Logo swap effect */}
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="relative w-56 h-32">
                {/* Normal logo */}
                <img
                  src={client.logo}
                  alt="Client Logo"
                  className="w-full h-full object-contain absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10"
                />
                {/* Hover logo */}
                <img
                  src={client.hoverLogo}
                  alt="Client Hover Logo"
                  className="w-full h-full object-contain absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meetour;
