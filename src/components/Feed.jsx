import React, { useEffect, useState } from "react";
import tom from "../assets/tom.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../Data";
import { Value_Converter } from "../Data";
import moment from "moment";
const Feed = ({ sidebar, filter }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${filter}&key=${API_KEY}`;
    await fetch(video_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [filter]);
  return (
    <div className={`grid grid-cols-4 gap-8 ${sidebar ? "" : "gap-14"}`}>
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
            <div className="cursor-pointer">
              <div>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="rounded-2xl"
                />
              </div>
              <div className="flex gap-8 mt-2">
                {/* <div>
                  <img src={tom} className="rounded-full h-12 w-12" />
                </div> */}
                <div>
                  <p className="font-semibold text-2xl">{item.snippet.title}</p>
                  <p className="text-xl">{item.snippet.channelTitle}</p>
                  <p className="text-xl">
                    {" "}
                    {Value_Converter(item.statistics.viewCount)} views .{" "}
                    {moment(item.snippet.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
