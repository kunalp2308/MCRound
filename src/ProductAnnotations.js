import React from "react";

const ProductAnnotations = ({ annotations }) => {
  return (
    <div className="annotations">
      {annotations.map((annotation, index) => (
        <div
          key={index}
          className="annotation"
          style={{
            top: annotation.position.top,
            left: annotation.position.left,
          }}
        >
          <button onClick={() => alert(`Go to product: ${annotation.product}`)}>
            {annotation.product}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductAnnotations;
