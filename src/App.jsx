import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./Video/Video";
import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Nav setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
      ;
    </>
  );
}

export default App;
