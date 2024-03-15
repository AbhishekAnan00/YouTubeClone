import React from "react";
import automobiles from "../assets/automobiles.png";
import blogs from "../assets/blogs.png";
import entertainment from "../assets/entertainment.png";
import sports from "../assets/sports.png";
import explore from "../assets/explore.png";
import game_icon from "../assets/game_icon.png";
import history from "../assets/history.png";
import home from "../assets/home.png";
import jack from "../assets/jack.png";
import library from "../assets/library.png";
import megan from "../assets/megan.png";
import music from "../assets/music.png";
import news from "../assets/news.png";
import simon from "../assets/simon.png";
import tech from "../assets/tech.png";
import tom from "../assets/tom.png";
const Sidebar = ({ sidebar, filter, setFilter }) => {
  return (
    <div className={`w-60 ${sidebar ? "" : "w-14"}`}>
      <div className={`${sidebar ? "" : "w-14"}`}>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 0 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(0)}
        >
          <img src={home} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Home
          </p>
        </div>
        <hr className={`mb-3 mt-3 ${sidebar ? "" : "hidden"}`} />
        <span
          className={`font-semibold text-xl ml-4 ${sidebar ? "" : "hidden"}`}
        >
          You
        </span>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 2 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(2)}
        >
          <img src={history} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            History
          </p>
        </div>
        <hr className={`mb-3 mt-3 ${sidebar ? "" : "hidden"}`} />
        <span
          className={`font-semibold text-xl ml-4 ${sidebar ? "" : "hidden"}`}
        >
          Explore
        </span>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 1 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(1)}
        >
          <img src={library} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Library
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 10 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(10)}
        >
          <img src={music} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Music
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 20 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(20)}
        >
          <img src={game_icon} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Gaming
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 17 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(17)}
        >
          <img src={sports} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Sports
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 25 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(25)}
        >
          <img src={news} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            News
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 28 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(28)}
        >
          <img src={tech} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Technology
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 24 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(24)}
        >
          <img src={entertainment} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Entertainment
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 26 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(26)}
        >
          <img src={automobiles} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Automobiles
          </p>
        </div>
        <div
          className={`h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer ${
            filter === 22 ? "bg-gray-200 rounded-xl" : ""
          }`}
          onClick={() => setFilter(22)}
        >
          <img src={blogs} className="h-8 w-8" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Blogs
          </p>
        </div>
        <hr className={`mb-3 mt-3 ${sidebar ? "" : "hidden"}`} />
        <span
          className={`font-semibold text-xl ml-4 ${sidebar ? "" : "hidden"}`}
        >
          Subscriptions
        </span>
        <div className="h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer">
          <img src={jack} className="h-8 w-8 rounded-full" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Jack
          </p>
        </div>
        <div className="h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer">
          <img src={simon} className="h-8 w-8 rounded-full" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Tony
          </p>
        </div>
        <div className="h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer">
          <img src={tom} className="h-8 w-8 rounded-full" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Tom
          </p>
        </div>
        <div className="h-12 flex items-center gap-6 mt-3 pl-5 hover:bg-gray-200 hover:rounded-xl cursor-pointer">
          <img src={megan} className="h-8 w-8 rounded-full" />
          <p className={`font-normal text-xl ${sidebar ? "" : "hidden"}`}>
            Rose
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
