import React, { useState, useEffect } from "react";
import ProductAnnotations from "./ProductAnnotations";
import VideoPlayer from "./VideoPlayer";

const Look = ({ look, onNext, onPrev }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentMedia = look.media[currentMediaIndex];

  useEffect(() => {
    if (currentMedia.type === "image") {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            handleNextMedia();
            return 100;
          }
          return prev + 20;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentMedia]);

  const handleNextMedia = () => {
    if (currentMediaIndex < look.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    } else {
      onNext();
    }
  };

  const handlePrevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    } else {
      onPrev();
    }
  };

  return (
    <div className="look">
      <div className="navigation">
        <button onClick={handlePrevMedia}>←</button>
        <button onClick={handleNextMedia}>→</button>
      </div>
      {currentMedia.type === "image" ? (
        <div className="image-container">
          <img src={require("../src/" + currentMedia.url)} alt="Look" />
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <ProductAnnotations annotations={currentMedia.annotations} />
        </div>
      ) : (
        <VideoPlayer
          url={currentMedia.url}
          onVideoEnd={handleNextMedia}
          setProgress={setProgress}
        />
      )}
    </div>
  );
};

export default Look;
