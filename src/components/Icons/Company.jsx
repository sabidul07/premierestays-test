import React from "react";
const companylogo = [
  { img: "/src/assets/expedia.png" },
  { img: "/src/assets/bnb.png" },
  { img: "/src/assets/vrbo.png" },
  { img: "/src/assets/expedia.png" },
  { img: "/src/assets/booking.png" },
];
const Company = () => {
  return (
    <>
      <article className="custom-container mt-10 md:mt-14 lg:mt-20 xl:mt-30 px-4 xl:px-0">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-2">
          <h3 className="w-full max-w-[464px] lg:w-fit text-[26px] lg:text-4xl text-[#2B3244] leading-[140%] font-semibold">
            Our Trusted Partners
          </h3>
          <p className="w-full max-w-[464px] leading-[160%] text-gray text-lg">
            We proudly partner with leading booking platforms to ensure maximum
            visibility for our properties. Check out the platforms where you can
            find us!
          </p>
        </div>
        <div className="mt-10 lg:mt-15 flex items-center flex-wrap xl:flex-nowrap justify-center gap-[25px]">
          {companylogo.map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-[244px] grid place-content-center py-[19px] border border-cloudblue shadow-[3.28px_4.92px_24.59px_-1.76px_#0000000A] rounded-xl"
            >
              <img
                className="w-[187px] h-[60px] object-cover"
                src={logo.img}
                alt="expedia"
              />
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Company;
