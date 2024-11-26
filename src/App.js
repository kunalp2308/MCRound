import React from "react";
import Lookbook from "./LookBook";

const looks = [
  {
    id: 1,
    media: [
      {
        type: "image",
        url: "ImageVideo/Image1.png",
        annotations: [
          { product: "Shirt", position: { top: "20%", left: "30%" } },
          { product: "Pants", position: { top: "60%", left: "40%" } },
        ],
      },
    ],
  },
  {
    id: 2,
    media: [
      {
        type: "video",
        url: "ImageVideo/Video1.mp4",
      },
    ],
  },
  {
    id: 3,
    media: [
      {
        type: "image",
        url: "ImageVideo/Image2.png",
        annotations: [
          { product: "Dress", position: { top: "50%", left: "50%" } },
        ],
      },
    ],
  },
  {
    id: 4,
    media: [
      {
        type: "image",
        url: "ImageVideo/Image3.jpg",
        annotations: [
          { product: "Dress", position: { top: "50%", left: "50%" } },
        ],
      },
    ],
  },
  {
    id: 5,
    media: [
      {
        type: "video",
        url: "ImageVideo/Video2.mp4",
      },
    ],
  },
  {
    id: 6,
    media: [
      {
        type: "image",
        url: "ImageVideo/Image4.jpg",
        annotations: [
          { product: "Dress", position: { top: "50%", left: "50%" } },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Lookbook</h1>
      <Lookbook looks={looks} />
    </div>
  );
}

export default App;
