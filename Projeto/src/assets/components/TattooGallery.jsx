// src/components/TattooGallery.js
import React from 'react';
import './TattooGallery.css';

// Array de URLs das imagens de tatuagens
const tattooImages = [
  "/assets/Tatto01.jpeg",
  "/assets/Tatto02.jpeg",
  "/assets/Tatto03.jpeg",
  "/assets/Tatto04.jpeg",
  "/assets/Tatto05.jpeg",
  "/assets/Tatto06.jpeg",
  "/assets/Tatto07.jpeg",
  "/assets/Tatto08.jpeg",
  "/assets/Tatto09.jpeg",
  "/assets/Tatto10.jpeg",
  "/assets/Tatto11.jpeg",
  "/assets/Tatto12.jpeg",
];

function TattooGallery() {
  return (
    <div className="gallery">
      {tattooImages.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Tattoo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default TattooGallery;
