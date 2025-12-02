import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default CSS

import Location from "./Icons/Location";
import DateIcon from "./Icons/DateIcon";
import GuestIcon from "./Icons/GuestIcon";
import GuestArrow from "./Icons/GuestArrow";
import ButtonArrow from "./Icons/ButtonArrow";

const Header = () => {
  return (
    <>
      <header className="bg-[url('/src/assets/header.png')] bg-cover bg-bottom h-[820px] w-full pt-12 lg:pt-20 xl:pt-40  flex items-end flex-col justify-between">
        <div className="w-full">
          <h1 className="w-full max-w-[780px] lg:max-w-[1100px] mx-auto text-4xl md:text-5xl lg:text-6xl text-center text-white font-medium leading-[120%]">
            Experience 5-Star Vacation Living with Premier Stays Miami
          </h1>
          <p className="w-full max-w-[730px] mt-3 leading-[170%] mx-auto text-center text-white">
            Unlock the full potential of your property with our expert
            management services. We prioritize your success and satisfaction,
            ensuring a seamless experience every step of the way.
          </p>
        </div>
        <div
          className="custom-container gap-5 flex items-center flex-wrap justify-center bg-white shadow-[10px_20px_60px_0px_#00000008]
         sm:p-[30px] p-4 rounded-t-2xl"
        >
          <div className="w-full md:w-[319px] py-5 px-4 border border-lavender rounded-lg flex items-center gap-px">
            <Location />
            <input
              className="placeholder:text-gray placeholder:font-medium outline-0"
              type="text"
              placeholder="Search by location"
            />
          </div>
          <div className="w-full md:w-[319px] py-5 px-4 border border-lavender rounded-lg flex items-center">
            <button className="flex items-center gap-2.5 text-gray font-medium cursor-pointer">
              <DateIcon />
              Check-in
            </button>
            <span className="w-6 h-px bg-[#C5CCDE] -rotate-90"></span>
            <button className="flex items-center gap-2.5 text-gray font-medium cursor-pointer">
              <DateIcon />
              Check-out
            </button>
          </div>
          <div className="w-full md:w-[319px] py-5 px-4 border border-lavender rounded-lg flex items-center gap-2.5 cursor-pointer">
            <div className="flex items-center gap-0.5 font-medium text-gray">
              <GuestIcon />
              Guests
            </div>
            <GuestArrow />
            <div className="hidden w-52 text-center bg-white text-gray font-medium border border-lavender py-4 space-y-4 rounded absolute bottom-20 left-0">
              <p className="hover:bg-green-300">Rahul</p>
              <p className="hover:bg-green-300">Rahul</p>
              <p className="hover:bg-green-300">Rahul</p>
            </div>
          </div>
          <button className="w-full md:w-fit primary-btn group justify-between md:justify-start">
            Search Properties
            <ButtonArrow />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
background:;
