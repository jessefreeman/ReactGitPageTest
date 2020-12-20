import React from 'react';

function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-8">
            {/* <h1 className="h2 mb-4 text-palette-6">We need your help</h1> */}
            <p className="text-xl">Thousands of developers <span className="font-bold text-palette-14">support</span>, <span className="font-bold text-palette-14">contribute</span>, and <span className="font-bold text-palette-14">make games</span> with Pixel Vision 8. Come join our growing community.</p>
          </div>

          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-palette-5 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8 border-r border-dashed border-palette-6">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-palette-7 mb-2" data-aos="fade-up">13.5K+</div>
              <div className="h3 text-palette-15 md:pb-4" data-aos="fade-up" data-aos-delay="200">Members</div>
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-palette-15 bg-palette-5 hover:bg-palette-6" href="https://pixelvision8.substack.com">Subscribe</a>
              </div>
            </div>
            {/* 4rd item */}
            <div className="py-6 md:py-0 md:px-8 border-r border-dashed border-palette-6">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-palette-2 mb-2" data-aos="fade-up">4.2k+</div>
              <div className="h3 text-palette-15 md:pb-4" data-aos="fade-up" data-aos-delay="200">Twitter</div>
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-palette-15 bg-palette-5 hover:bg-palette-6" href="https://twitter.com/pixelvision8">Follow</a>
              </div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8 border-r border-dashed border-palette-6">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-palette-6 mb-2" data-aos="fade-up">760+</div>
              <div className="h3 text-palette-15 md:pb-4" data-aos="fade-up" data-aos-delay="200">Discord</div>
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-palette-15 bg-palette-5 hover:bg-palette-6" href="https://discord.gg/pixelvision8">Join</a>
              </div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-palette-9 mb-2" data-aos="fade-up">550+</div>
              <div className="h3 text-palette-15 md:pb-4" data-aos="fade-up" data-aos-delay="200">Github</div>
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <a className="btn text-palette-15 bg-palette-5 hover:bg-palette-6" href="https://github.com/pixelvision8/pixelvision8">Star</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;