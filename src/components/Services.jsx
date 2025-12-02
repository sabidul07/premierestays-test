import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ButtonArrow from "./Icons/ButtonArrow";
import houseicon from "./Icons/HousekeepingIcon";
import legal from "./Icons/LegalIcon";
import manage from "./Icons/ManagementIcon";
import linkarrow from "./Icons/LinkArrow";
import CardCircleSvg from "./Icons/CardCircleSvg";
const Services = () => {
  const cards = [
    {
      bg: "#A020F0",
      icon: houseicon,
      title: "Housekeeping & Turnover Coordination",
      text: "We prioritize cleanliness and guest satisfaction with our meticulous housekeeping. Each turnover is managed with a detailed checklist to ensure a hotel-standard experience.",
      link: "Learn More",
      arrow: linkarrow,
    },
    {
      bg: "#F86E04",
      icon: legal,
      title: "Legal & Compliance Assistance",
      text: "Navigating local laws and regulations in the short-term rental market can be complex, especially in places like Miami. We stay up-to-date on all relevant legal requirements,",
      link: "Learn More",
      arrow: linkarrow,
    },
    {
      bg: "#38C6F9",
      icon: manage,
      title: "Guest Communication & Booking Management",
      text: "Our team is available to handle all aspects of guest communication, from initial inquiries to post-checkout feedback. We ensure timely, professional responses to all",
      link: "Learn More",
      arrow: linkarrow,
    },
    {
      bg: "#A020F0",
      icon: houseicon,
      title: "Housekeeping & Turnover Coordination",
      text: "We prioritize cleanliness and guest satisfaction with our meticulous housekeeping. Each turnover is managed with a detailed checklist to ensure a hotel-standard experience.",
      link: "Learn More",
      arrow: linkarrow,
    },
    {
      bg: "#F86E04",
      icon: legal,
      title: "Legal & Compliance Assistance",
      text: "Navigating local laws and regulations in the short-term rental market can be complex, especially in places like Miami. We stay up-to-date on all relevant legal requirements,",
      link: "Learn More",
      arrow: linkarrow,
    },
    {
      bg: "#38C6F9",
      icon: manage,
      title: "Guest Communication & Booking Management",
      text: "Our team is available to handle all aspects of guest communication, from initial inquiries to post-checkout feedback. We ensure timely, professional responses to all",
      link: "Learn More",
      arrow: linkarrow,
    },
  ];

  return (
    <>
      <section className="bg-[#100A55] py-14 lg:py-20 xl:py-28">
        <div className="custom-container">
          <div className="flex justify-between flex-col lg:flex-row gap-4 mb-12 lg:mb-20 ">
            <div>
              <h5 className="text-[#38C6F9] font-[Jomolhari] text-2xl mb-2.5">
                Our Services
              </h5>
              <h3 className="section-heading text-white">
                We Provide Services for You.
              </h3>
            </div>
            <div className="w-full max-w-[492px] space-y-7 ">
              <p className="text-white">
                Explore our comprehensive services, meticulously crafted to
                enhance property value and streamline management.
              </p>
              <button className="primary-btn group">
                View All Service
                <span>
                  <ButtonArrow />
                </span>
              </button>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={25}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              loop={true}
              className="mySwiper"
            >
              {cards.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 shadow-[10px_20px_60px_0px_#00000008] border-white/10 rounded-xl p-4 sm:p-6 border relative overflow-clip h-[380px] sm:h-[442px] flex-col flex justify-between">
                    <div className="">
                      <div
                        style={{ backgroundColor: item.bg }}
                        className="w-20 sm:w-[106px] h-20 sm:h-[106px] rounded-full grid place-content-center mb-7"
                      >
                        <item.icon></item.icon>
                      </div>
                      <h2 className="text-white text-xl sm:text-[28px] font-semibold leading-[140%] mb-3.5">
                        {item.title}
                      </h2>
                      <p className="text-white/80 leading-[160%]">
                        {item.text}
                      </p>
                    </div>
                    <a
                      className="w-fit text-[#586DF7] font-semibold flex items-center gap-1 hover:underline"
                      href="#"
                    >
                      {item.link}
                      <item.arrow></item.arrow>
                    </a>
                    <div className="absolute right-0 top-0">
                      <CardCircleSvg />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
