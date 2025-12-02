import HomeIcon from "./Icons/HomeIcon";

import { featurecard } from "./Helper";

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
              <div className="bg-white p-4 rounded-xl" key={index}>
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
