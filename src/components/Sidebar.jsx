import React from "react";
import Rightarrow from "./Icons/Rightarrow";
import { navlink } from "./Helper";
import SideBarLinks from "./SideBarLinks";

const Sidebar = () => {
  return (
    <>
      <div
        id="sidebar"
        className="fixed inset-0 justify-between top-20 bg-white pb-6 transition-all duration-500 ease-in-out -translate-x-full overflow-hidden flex flex-col"
      >
        <SideBarLinks />
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
