import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Recommended from "../components/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="flex">
      <VideoPlayer videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
