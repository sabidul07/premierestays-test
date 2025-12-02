import React from "react";
import { navlink } from "./Helper";

const NavLinks = () => {
  return (
    <>
      <ul className="items-center lg:flex gap-9 hidden py-4 px-7">
        {navlink.map((item, index) => (
          <li key={index}>
            <a href="#" className="nav-links">
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
