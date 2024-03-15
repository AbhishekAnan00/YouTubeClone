import React from "react";
import videotube_icon from "../assets/logo.png";
import menu_icon from "../assets/menu.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import notify_icon from "../assets/notification.png";
import avatar_icon from "../assets/jack.png";
import { Link } from "react-router-dom";
const Nav = ({ setSidebar }) => {
  return (
    <div>
      <nav className="sticky top-0 z-10 flex justify-between items-center h-16 shadow-sm">
        <div className="flex gap-8 mx-10">
          <span className="hover:bg-gray-100 hover:rounded-full h-12 w-12 items-center flex justify-center">
            <img
              src={menu_icon}
              className="h-6 cursor-pointer"
              onClick={() =>
                setSidebar((prev) => (prev === false ? true : false))
              }
            />
          </span>
          <span className="items-center flex justify-center">
            <Link to="/">
              <img src={videotube_icon} className="h-8 cursor-pointer" />
            </Link>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <input
              type="text"
              placeholder="search"
              className="text-2xl text-black w-[600px] h-12 outline-none border-grey-200 border-2 rounded-l-full px-6  phone-sm:hidden phone-md:hidden phone-lg:hidden phone-xl:hidden phone-2xl:hidden width-all:block"
            />
          </div>
          <div className="bg-gray-50 hover:bg-gray-100 h-12 w-24 flex justify-center items-center rounded-r-full border-grey-200 border-2 border-l-0 cursor-pointer phone-sm:hidden width-all:flex">
            <img src={search_icon} className="h-6 phone-sm:hidden phone-md:hidden phone-lg:hidden phone-xl:hidden phone-2xl:hidden width-all:block" />
          </div>
        </div>
        <div className="flex gap-6 mx-10">
          <span className="hover:bg-gray-100 hover:rounded-full h-12 w-12 items-center flex justify-center cursor-pointer  phone-sm:hidden phone-md:hidden phone-lg:hidden phone-xl:hidden phone-2xl:hidden width-all:block">
            <img src={upload_icon} className="h-8" />
          </span>
          <span className="hover:bg-gray-100 hover:rounded-full h-12 w-12 items-center flex justify-center cursor-pointer  phone-sm:hidden phone-md:hidden phone-lg:hidden phone-xl:hidden phone-2xl:hidden width-all:block">
            <img src={notify_icon} className="h-8" />
          </span>
          <span className="items-center flex justify-center cursor-pointer  phone-sm:hidden phone-md:hidden phone-lg:hidden phone-xl:hidden phone-2xl:hidden width-all:block">
            <img src={avatar_icon} className="h-10 rounded-full " />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
