import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { API_KEY, Value_Converter } from "../Data";
import moment from "moment";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const FecthUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(FecthUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-[30%]">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <div
              key={index}
              className="cursor-pointer grid grid-cols-2 gap-5 mx-4 mt-5"
            >
              <div>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="rounded-xl"
                />
              </div>
              <div>
                <p className="font-semibold text-xl">{item.snippet.title}</p>
                <p className="text-lg">{item.snippet.channelTitle}</p>
                <p className="text-lg">
                  {Value_Converter(item.statistics.viewCount)} views .{" "}
                  {moment(item.snippet.publishedAt).fromNow()}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
