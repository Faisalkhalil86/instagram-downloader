import React from "react";
import MyPhoto from "../assets/instagram photo.png";

const Download = () => {
  return (
    <section className="bg-white py-16 max-w-[1920px] mx-auto">
      <div className="flex justify-center gap-20 px-30  items-center">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-800 mb-6">
            Instagram Videos download
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-justify ">
            Have you ever wanted to save a video from Instagram? Maybe you want
            to share it with someone else, or perhaps you want to keep it for
            later. Whatever the case may be, we have the tool for you. Instagram
            Video Downloader is a simple and easy-to-use tool that lets you
            download your videos from Instagram. It's never been easier to save
            and share your favorite Instagram videos with friends, family, and
            anyone who loves them as much as you do. With our simple and
            easy-to-use tool, you can download all the videos you want from
            Instagram and save them on your computer or mobile device.
          </p>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src={MyPhoto}
            alt="My Photo"
            className="w-72 h-72 object-contain drop-shadow-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
