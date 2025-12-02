import React from "react";
import Rightarrow from "./Icons/Rightarrow";
const navlink = [
  { link: "Home" },
  { link: "About Us" },
  { link: "Services" },
  { link: "Book Now" },
  { link: "FAQ" },
  { link: "Contact Us" },
];
const Sidebar = () => {
  return (
    <>
      <div
        id="sidebar"
        className="fixed inset-0 justify-between top-20 bg-white pb-6 transition-all duration-500 ease-in-out -translate-x-full overflow-hidden flex flex-col "
      >
        <ul className="space-y-6 text-center py-4">
          {navlink.map((item, index) => (
            <li key={index}>
              <a href="#" className="nav-links">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-full text-center gap-5 px-4 flex items-center">
          <a className="nav-links" href="#">
            Login
          </a>
          <button className="nav-btn group w-full justify-between">
            Register
            <span>
              <Rightarrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
