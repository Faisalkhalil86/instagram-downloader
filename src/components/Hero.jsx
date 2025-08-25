import React from "react";
import { FiDownload, FiClipboard, FiImage } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineHighlight, MdOutlineSlowMotionVideo } from "react-icons/md";

const HeroSection = () => {
  const tabs = [
    { label: "Video", icon: <RiVideoLine /> },
    { label: "Photo", icon: <FiImage /> },
    { label: "Reels", icon: <FaRegPlayCircle /> },
    { label: "Story", icon: <MdOutlineSlowMotionVideo /> },
  ];

  return (
    <section
      className="flex items-center max-w-[1920px] mx-auto  py-16 justify-center bg-gradient-to-r from-[#DB00FF] via-[#7D55FF] to-[#1FA7FE]"
    >
      <div className="w-full max-w-3xl text-center px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className="flex items-center border-r border-gray-400 gap-2 px-6 py-2 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition"
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          Instagram Photo Downloader
        </h1>

        {/* Input + Buttons */}
        <div className="flex items-center w-full max-w-3xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Paste link here"
            className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
          />

          {/* Paste Button */}
          <button className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-sky-500 hover:text-sky-600">
            <FiClipboard className="text-lg" />
            Paste
          </button>

          {/* Download Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold">
            <FiDownload className="text-lg" />
            DOWNLOAD
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
