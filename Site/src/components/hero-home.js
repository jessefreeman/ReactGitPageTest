import React, { useState } from 'react';
import Modal from '../utils/Modal';

const ReactRotatingText = require('react-rotating-text');

const title = [
  'An open source',
  'fully customizable',
  'Fantasy Game Console'
]

const summary = 
<>
  <span className="font-bold">Pixel Vision 8</span> is a next generation <span className="font-bold">8-bit fantasy game console</span>. Don't just make games, design your system's specs to match actual hardware, or create something new.
</>

const words = 
[
  'game jams', 
  'prototyping', 
  'pixel art', 
  'sound effects', 
  'chip tunes', 
  'having fun'
]

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
  
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center md:pb-16">
            <h1 className="h1 mb-8" data-aos="fade-up">
              {title[0]}<br/>
              <span className="text-palette-13">{title[1]}</span><br/>
              <span className="text-palette-14">{title[2 ]}</span><br/>
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
              {summary}
            </p>
            <h3 className="h3 mb-16" data-aos="fade-up" data-reveal-delay="400">
                  It's perfect for <span className="bg-palette-14 text-palette-0 p-2 ml-2"> {<ReactRotatingText typingInterval={10} deletingInterval={5} cursor={false} pause={3000} emptyPause={0} items={words} />}</span>
            </h3>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <a className="btn text-palette-15 bg-palette-8 hover:bg-palette-9 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/PixelVision8/PixelVision8/releases/latest" data-aos="fade-up" data-aos-delay="400">Latest Build</a>
              <a className="btn text-palette-15 bg-palette-5 hover:bg-palette-6 w-full sm:w-auto sm:ml-4" href="https://github.com/PixelVision8/PixelVision8/releases" data-aos="fade-up" data-aos-delay="600">All Releases</a>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={require('../images/pv8-chips.svg')} width="656" height="450" alt="Hero" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;