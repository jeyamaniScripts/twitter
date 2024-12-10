// import React from "react";

import { useState } from "react";
import Post from "../../components/commen/Post";
import CreatePost from "./CreatePost";

const Home = () => {
  const [feedType, setFeedType] = useState("forYou");

  const handleFeedType = (type) => {
    setFeedType(type);
  };
  return (
    <div className="min-h-screen flex-[4_4_0] mr-auto border-r border-gray-700">
      {/* Header  */}
      <div className="flex w-full border-b border-gray-700">
        <div
          className="flex justify-center flex-1 relative cursor-pointer p-3 hover:bg-secondary transition duration-300"
          onClick={() => handleFeedType("forYou")}
        >
          For You
          {feedType === "forYou" && (
            <div className=" absolute bg-primary h-1 w-10 bottom-0  rounded-full"></div>
          )}
        </div>
        <div
          className="flex justify-center flex-1 relative cursor-pointer p-3 hover:bg-secondary transition duration-300"
          onClick={() => handleFeedType("following")}
        >
          Following
          {feedType === "following" && (
            <div className=" absolute bg-primary h-1 w-10 bottom-0  rounded-full"></div>
          )}
        </div>
      </div>
      {/* Create Post  */}
      <CreatePost />
      {/* Post  */}
      <Post />
    </div>
  );
};

export default Home;
