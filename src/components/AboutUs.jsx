import React from "react";
import ButtonArrow from "./Icons/ButtonArrow";

const AboutUs = () => {
  return (
    <>
      <section className="custom-container flex flex-col-reverse lg:flex-row gap-8 items-center justify-between mt-10 md:mt-14 lg:mt-20 xl:mt-30 px-4 xl:px-0 mb-10">
        <div className="w-full max-w-[696px] lg:max-w-[564px] sm:h-[470px]">
          <img
            className="w-full h-full rounded-[20px] object-cover"
            src="/src/assets/aboutussidebar.jpg"
            alt="aboutussidebar"
          />
        </div>
        <div className="w-full max-w-[696px]">
          <h4 className="font-[Jomolhari] text-purple text-2xl tracking-wider mb-2.5">
            About Us
          </h4>
          <h2 className="section-heading mb-6">
            We offer Unique Places Suitable for your Comfort
          </h2>
          <p className="text-gray text-lg leading-[160%] mb-10">
            At Premierestays Miami, our mission is to deliver exceptional
            property management services that exceed guest expectations through
            Careful attention to detail and unwavering commitment to quality. We
            strive to maintain the highest standards in the industry, ensuring
            every property we manage is not only maintained but elevated,
            creating seamless and memorable guest experiences that reflect our
            dedication to excellence.
          </p>
          <button className="primary-btn group">
            Learn More
            <span>
              <ButtonArrow />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
