import React from "react";
import downloader from "../assets/downloader.svg";

const InstagramDownloader = () => {
  return (
    <section className="bg-white max-w-[1920px] mx-auto py-12 px-6 md:px-0 flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <img
          src={downloader}
          alt="Instagram Video Downloader"
          className="w-72  h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left max-w-2xl">
        <h2 className="text-3xl md:text-3xl font-bold text-blue-900">
          Instagram Video Downloader
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mt-5">
          Instagram Video Download
        </h3>
        <p className="text-gray-600 mt-3 max-w-xl leading-relaxed text-justify">
          We have made it easy to download videos from Instagram. All you have
          to do is insert the link and click the "Download" button. Our Video
          Downloader for Instagram is a revolutionary service that will save
          your favorite IG videos in the best quality. Our Video Downloader for
          Instagram is your perfect assistant for quick and easy access to the
          content you can't live without.
        </p>
      </div>
    </section>
  );
};

export default InstagramDownloader;
