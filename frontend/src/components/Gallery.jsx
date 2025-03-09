import React from 'react'
import { motion } from "framer-motion";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <motion.img
              whileHover={{ scale: 0.9 }}
              key={index}
              src={element}
              alt="gallery-image"
            />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              key={index}
              src={element}
              alt="gallery-image"
            />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <motion.img
              whileHover={{ scale: 1.1 }}
              key={index}
              src={element}
              alt="gallery-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery
