import React, { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import profile from "../assets/user_profile.jpg";
import share from "../assets/share.png";
import save from "../assets/save.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import { API_KEY, Value_Converter } from "../Data";
import moment from "moment";
import { useParams } from "react-router-dom";
const VideoPlayer = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comment, setComment] = useState([]);
  const fetch_video_data = async () => {
    const video_details = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(video_details)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const channel_data = async () => {
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channel_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };
  const comment_data = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setComment(data.items));
  };
  useEffect(() => {
    fetch_video_data();
  }, [videoId]);
  useEffect(() => {
    channel_data();
  }, [apiData]);
  useEffect(() => {
    comment_data();
  }, []);
  return (
    <div className="w-[70%] pl-10 mt-5">
      <div>
        {/* <video src={video} controls autoPlay muted className="rounded-xl"></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-[100%] h-[37vw]"
        ></iframe>
      </div>
      <div className="font-bold text-3xl mt-3 text-stone-900">
        {`${apiData ? apiData.snippet.title : "TITLE HERE"}`}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
          <div>
            <img
              src={
                channelData ? channelData.snippet.thumbnails.default.url : ""
              }
              className="rounded-full h-14 w-14 cursor-pointer"
            />
          </div>
          <div>
            <p className="font-semibold text-xl">
              {apiData ? apiData.snippet.channelTitle : "Channel"}
            </p>
            <p>
              {channelData
                ? Value_Converter(channelData.statistics.subscriberCount)
                : "1M"}{" "}
              subsciber
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-8  px-4 h-12 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={like} className="h-8 w-8" />
              <p className="font-medium">
                {apiData
                  ? Value_Converter(apiData.statistics.likeCount)
                  : "1.2k"}
              </p>
            </div>
            <div className="h-8 w-[1px] bg-gray-500"></div>
            <div className="flex items-center">
              <img src={dislike} className="h-8 w-8" />
            </div>
          </div>
          <div className="flex items-center gap-8  px-4 h-12 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={share} className="h-8 w-8" />
              <p className="font-medium text-lg">Share</p>
            </div>
          </div>
          <div className="flex items-center gap-8  px-4 h-12 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={save} className="h-8 w-8" />
              <p className="font-medium text-lg">Download</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 bg-gray-100 rounded-2xl p-6 cursor-pointer">
        <span className="font-semibold text-lg flex gap-4">
          <p>
            {`${
              apiData ? Value_Converter(apiData.statistics.viewCount) : "16k"
            }`}{" "}
            views
          </p>
          <p>
            {" "}
            {`${
              apiData
                ? moment(apiData.snippet.publishedAt).fromNow()
                : "2 weeks ago"
            }`}
          </p>
        </span>
        <span className="text-xl">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Lorem ipsum consequatur fuga voluptas maiores et ut tempora cumque, maxime soluta quae ex deserunt, magni sed earum perferendis, repellendus corrupti vero totam"}
          ...
        </span>
      </div>
      <div>
        <p className="font-bold text-2xl mt-5">
          {apiData ? apiData.statistics.commentCount : "103"} comments
        </p>
      </div>
      {comment.map((item, index) => {
        return (
          <div key={index} className="flex gap-3 mt-6">
            <div>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                className="h-14 w-14 rounded-full cursor-pointer"
              />
            </div>
            <div>
              <div className="gap-2 flex items-center">
                <p className="font-semibold text-xl">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
                <p>
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </p>
              </div>
              <div>
                <p className="text-xl">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
              </div>
              <div className="gap-4 flex mt-4 items-center">
                <button className="flex items-center h-12 w-12 hover:bg-gray-200 hover:rounded-full cursor-pointer">
                  <img src={like} className="h-8 w-8" />
                  <p>
                    {Value_Converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </p>
                </button>
                <button className="h-12 w-12 hover:bg-gray-200 hover:rounded-full cursor-pointer">
                  <img src={dislike} className="h-8 w-8" />
                </button>
                <p className="text-lg font-semibold cursor-pointer">Reply</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoPlayer;
