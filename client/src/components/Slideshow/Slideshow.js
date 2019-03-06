import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const slideImages = [
    'fadrpuppies.jpg',
    'fluffypuppy.jpg',
    'landonfadrevents.jpg',
    'pitfall.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          slideImages.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt='Dog Event Pictures'/>)
        }
      </Zoom>
    )
}

export default Slideshow;