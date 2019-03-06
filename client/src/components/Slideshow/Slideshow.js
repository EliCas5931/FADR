import React from 'react';
import { Zoom } from 'react-slideshow-image';

import fadrpuppies from './fadrpuppies.jpg';
import fluffypuppy from './fluffypuppy.jpg';
import landonfadrevents from './landonfadrevents.jpg';
import martine from './martine.jpg';
import events1 from './events1.jpg';
import event2 from './event2.jpg';
import event3 from './event3.jpg';
import fostergrandpa from './fostergrandpa.jpg';
import fadrevent from './fadrevent.jpg';

const slideImages = [
  fadrpuppies,
  event3,
  martine,
  events1,
  fluffypuppy, 
  landonfadrevents,
  event2,
  fostergrandpa,
  fadrevent
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
        slideImages.map((each, index) => <img key={index} style={{ width: "600px", height:"600px", border:"15px" }} src={each} id='adoptDogImg' alt='Dog Event Pictures' />)
      }
    </Zoom>
  );

}

//Documentation does not have this at the bottom of their examples
export default Slideshow;