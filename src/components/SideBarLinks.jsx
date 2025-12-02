import React from "react";
import { navlink } from "./Helper";

const SideBarLinks = () => {
  return (
    <>
      <ul className="space-y-6 text-center py-4">
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

export default SideBarLinks;
