import React, { useState, useRef } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from './logo.svg';
import './App.css';

library.add(fab, faAngleRight, faAngleLeft)

function App() {

  const [slideCounter, setSlideCounter] = useState(0);
  const [disableNext, setDisableNext] = useState(false);

  const sliderRef = useRef(null);

  const nextSlider = () => {
    if (window.innerWidth >= 610) {
      if (slideCounter <= (sliderRef.current.children.length - 4)) {
        setSlideCounter(prevNum => prevNum + 1)
      }
      else {
        setDisableNext(true);
      }
    }
    else {
      if (slideCounter <= (sliderRef.current.children.length - 3)) {
        setSlideCounter(prevNum => prevNum + 1)
      }
      else {
        setDisableNext(true);
      }
    }
  };

  const prevSlider = () => {
    setDisableNext(false);
    if (slideCounter !== 0) {
      setSlideCounter(prevNum => prevNum - 1)
    }
  };

  window.addEventListener('resize', () => setSlideCounter(0));

  return (
    <div className="App">
      <div className="slider" style={{ transform: window.innerWidth <= 610 ? `translateX(${(-100/2) * slideCounter}vw)` : `translateX(${(-100/3) * slideCounter}vw)` }} ref={sliderRef}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
      </div>
      <div className="sliderControls">
        <a onClick={prevSlider}><FontAwesomeIcon size="2x" icon="angle-left" color={slideCounter === 0 ? '#bbbfca' : 'black'} /></a>
        <a onClick={nextSlider}><FontAwesomeIcon size="2x" icon="angle-right" color={disableNext ? '#bbbfca' : 'black'} /></a>
      </div>
    </div>
  );
}

export default App;
