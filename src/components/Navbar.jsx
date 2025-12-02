import React from "react";
import navlogo from "../assets/nav-logo.png";
import Rightarrow from "./Icons/Rightarrow";
const navlink = [
  { link: "Home" },
  { link: "About Us" },
  { link: "Services" },
  { link: "Book Now" },
  { link: "FAQ" },
  { link: "Contact Us" },
];
const Navbar = () => {
  const menutoggle = () => {
    const menulink = document.getElementById("sidebar");
    const menuicon = document.getElementById("menuicon");
    if (sidebar.classList.toggle("translate-x-0")) {
      sidebar.classList.add("translate-x-0");
      menuicon.innerHTML = `<i class="fa-solid fa-x"></i>`;
    } else {
      sidebar.classList.remove("translate-x-0");
      menuicon.innerHTML = `<i class="fa-solid fa-list"></i>`;
    }
  };
  return (
    <nav className="shadow-[0px_20px_100px_0px_#092E481F] py-3.5 bg-white relative">
      <div className="custom-container flex items-center justify-between">
        <a href="#">
          <img
            className="w-32 h-14 object-cover"
            src={navlogo}
            alt="nav-logo"
          />
        </a>
        <ul className="items-center  lg:flex gap-9 hidden py-4 px-7">
          {navlink.map((item, index) => (
            <li key={index}>
              <a href="#" className="nav-links">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="items-center lg:flex gap-5 hidden py-4 px-7">
          <a className="nav-links" href="#">
            Login
          </a>
          <button className="flex gap-2 text-violetblue px-7 py-3.5 border border-violetblue rounded-[100px] hover:border-secondry hover:text-secondry transition-all duration-300 ease-in-out cursor-pointer group items-center">
            Register
            <Rightarrow />
          </button>
        </div>

        <button
          id="menuicon"
          onClick={menutoggle}
          className="text-black text-3xl font-bold cursor-pointer block lg:hidden h-fit relative z-10"
        >
          <i class="fa-solid fa-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
