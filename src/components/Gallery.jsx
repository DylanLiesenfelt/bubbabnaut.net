import { useState, useEffect } from "react";

// ==========> Photo Gallery <==========
const images = [
    "photo gallery/image (1).jpg",
    "photo gallery/image (2).jpg",
    "photo gallery/image (3).jpg",
    "photo gallery/image (4).jpg",
    "photo gallery/image (5).jpg",
    "photo gallery/image (6).jpg",
    "photo gallery/image (7).jpg",
    "photo gallery/image (8).jpg",
    "photo gallery/image (9).jpg",
    "photo gallery/image (10).jpg",
    "photo gallery/image (11).jpg",
    "photo gallery/image (12).jpg",
    "photo gallery/image (13).jpg",
    "photo gallery/image (14).jpg",
    "photo gallery/image (15).jpg",
    "photo gallery/image (16).jpg"
]

const Gallery = ({ startIndex = 0 }) => {
  
    const [imageIndex, setImageIndex] = useState(startIndex);
    const [isSliding, setIsSliding] = useState(false);
  
    useEffect(() => {
      let i = startIndex;
      const intervalId = setInterval(() => {
        setIsSliding(true); // Start slide effect
  
        setTimeout(() => {
          i = (i + 1) % images.length;
          setImageIndex(i);
          setIsSliding(false); // Reset slide effect after transition
        }, 1000); // Match this duration to CSS transition time
  
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [startIndex]);
  
    return (
        <img 
          src={images[imageIndex]} 
          alt="Gallery" 
          className={`slide ${isSliding ? "sliding" : ""}`} 
        />
    );
  };
  
  export default Gallery;