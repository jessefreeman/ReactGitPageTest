import React from 'react';
import Image from '../elements/Image';

function Process() {
  return (
    <section>
      <div className="px-4 sm:px-6 bg-palette-5">
        <div className="max-w-6xl mx-auto">
          <div className="pt-10 pb-12 md:pt-16 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4 text-palette-11" data-aos="fade-up">Share your games with others</h2>
              <p className="text-xl text-palette-15" data-aos="fade-up" data-aos-delay="200">Pixel Vision 8 has built in tools to quickly help you not only create games from scratch but share them with others on Windows, Mac, and Linux.</p>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up">
                <div aria-hidden="true" className="absolute mt-3 h-1 border-t border-dashed border-palette-6 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
                <Image
                      src={require('../images/icons/file-code-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                
                <h4 className="h4 mb-2 text-palette-15 pt-4">1. Code</h4>
                <p className="text-lg text-palette-15 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute mt-3 h-1 border-t border-dashed border-palette-6 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
                <Image
                  src={require('../images/icons/file-run-icon.svg')}
                  alt="Features tile icon 02"
                  width={92}
                  height={92} />
                <h4 className="h4 mb-2 pt-4">2. Run</h4>
                <p className="text-lg text-palette-15 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <Image
                      src={require('../images/icons/disk-empty-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <h4 className="h4 mb-2 pt-4">3. Build</h4>
                <p className="text-lg text-palette-15 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
