import React, { useRef, useEffect } from "react";
import sampleVideo from "../../assets/sample.mp4"; // Adjust the path as needed

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((err) => console.error("Play error:", err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-300 transition-transform duration-500 hover:scale-105">
          <video
            ref={videoRef}
            src={sampleVideo}
            className="w-full h-auto object-cover"
            muted
            playsInline
            controls
            poster="https://via.placeholder.com/800x450.png?text=Loading+Video..."
          />
        </div>
      </div>
    </section>
  );
};

export default AutoPlayVideo;
