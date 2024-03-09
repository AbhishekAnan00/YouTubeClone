import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
const Home = ({ sidebar }) => {
  const [filter, setFilter] = useState(0);
  return (
    <div className="flex">
      <Sidebar sidebar={sidebar} filter={filter} setFilter={setFilter} />
      <div className={`pl-16 mt-6 ${sidebar ? "" : "pl-20"}`}>
        <Feed sidebar={sidebar} filter={filter} />
      </div>
    </div>
  );
};

export default Home;
