import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ url, onVideoEnd, setProgress }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const updateProgress = () => {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
      };

      video.addEventListener("timeupdate", updateProgress);
      video.addEventListener("ended", onVideoEnd);

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
        video.removeEventListener("ended", onVideoEnd);
      };
    }
  }, [onVideoEnd, setProgress]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={require("../src/" + url)}
        autoPlay
        muted={isMuted}
      />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${setProgress}%` }}></div>
      </div>
      <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
    </div>
  );
};

export default VideoPlayer;
