import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import Location from "./Icons/LocationIcon";
import self from "./Icons/SelfIcon";
import pricing from "./Icons/PricingIcon";

const featurecard = [
  {
    icon: HomeIcon,
    bg: "#586DF7",
    heading: "Direct Booking with No Service Fees",
    para: "Encourages guests to book directly through the website and avoid third-party platform fees",
  },
  {
    icon: Location,
    bg: "#F86E04",
    heading: "Luxury, Fully-Furnished Vacation Rentals",
    para: "Encourages guests to book directly through the website and avoid third-party platform fees",
  },
  {
    icon: self,
    bg: "#38C6F9",
    heading: "Self Check-In with Smart Lock Technology",
    para: "Easy, contactless access to all properties through keyless entry, ensuring convenience and security.",
  },
  {
    icon: pricing,
    bg: "#A020F0",
    heading: "Transparent Pricing & Instant Booking",
    para: "Guests can view detailed pricing breakdowns with taxes and cleaning fees included, and instantly reserve",
  },
];
const OurFeature = () => {
  return (
    <>
      <section className="bg-lavendermist py-14 lg:py-20 xl:py-28">
        <div className="custom-container mb-14">
          <h5 className="font-[Jomolhari] text-[#A020F0] text-2xl tracking-wider mb-2.5 text-center">
            Our Feature
          </h5>
          <p className="section-heading text-center">Our Featured Properties</p>
        </div>
        <div className="custom-container flex flex-wrap justify-center xl:flex-nowrap gap-14">
          <div className="grid sm:grid-cols-2  gap-7">
            {featurecard.map((items, index) => (
              <div className="bg-white p-4 rounded-xl">
                <div
                  style={{ backgroundColor: items.bg }}
                  className=" w-14 h-14 rounded-full grid place-content-center mb-3"
                >
                  <items.icon></items.icon>
                </div>
                <h4 className="text-deepblue font-semibold text-xl leading-[150%] mb-1.5">
                  {items.heading}
                </h4>
                <p className="text-gray leading-[160%]">{items.para}</p>
              </div>
            ))}
          </div>
          <div className="w-full max-w-[584px] sm:h-[534px] relative">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src="/src/assets/findhome.png"
              alt="findhome"
            />
            <div className="absolute -bottom-8 right-8">
              <div className="sm:w-[393px] bg-white shadow-[0px_0px_50px_0px_#7065F033] p-4 sm:px-7 sm:py-6 rounded-lg ">
                <h4 className="text-cosmicnavy font-bold text-xl leading-[160%] mb-px">
                  Find the best deal
                </h4>
                <p className="text-shadowgray leading-[160%]">
                  Browse thousands of properties
                </p>
                <div className="bg-violetblue w-[62.5px] h-16 rounded-full grid place-content-center absolute right-1 sm:right-8 -top-8">
                  <HomeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeature;
