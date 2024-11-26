import React, { useState } from "react";
import Look from "./Look";

const Lookbook = ({ looks }) => {
  const [currentLookIndex, setCurrentLookIndex] = useState(0);

  const handleNextLook = () => {
    if (currentLookIndex < looks.length - 1) {
      setCurrentLookIndex(currentLookIndex + 1);
    }
  };

  const handlePrevLook = () => {
    if (currentLookIndex > 0) {
      setCurrentLookIndex(currentLookIndex - 1);
    }
  };

  return (
    <div className="lookbook">
      <Look
        look={looks[currentLookIndex]}
        onNext={handleNextLook}
        onPrev={handlePrevLook}
      />
    </div>
  );
};

export default Lookbook;
