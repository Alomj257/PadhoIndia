import React from "react";

const AutoPlayVideo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-300 transition-transform duration-500 hover:scale-105 aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OzcSNzm8b7g?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AutoPlayVideo;
