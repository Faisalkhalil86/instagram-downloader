import React from "react";

const HowToDownload = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          How to download video from Instagram?
        </h2>

        {/* Steps */}
        <ol className="space-y-6 text-lg">
          <li>
            <span className="font-normal text-3xl">1. Copy the URL</span>
            <p className="text-white/80 text-lg leading-relaxed ">
              Open the Instagram app or website, go to the photo, video, reels,
              carousel or IGTV you want to download. Copy the URL.
            </p>
          </li>

          <li>
            <span className="font-normal text-3xl">2. Paste the link</span>
            <p className="text-white/80 text-lg  leading-relaxed">
              Return to our website, paste the link into the input field at the
              top of the page and click the "Download" button to start
              downloading.
            </p>
          </li>

          <li>
            <span className="font-normal text-3xl">3. Download video</span>
            <p className="text-white/80 text-lg  leading-relaxed">
              Review the results and find the file you want to download. Click
              the Download button. Ready! The file is saved to your device.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowToDownload;
