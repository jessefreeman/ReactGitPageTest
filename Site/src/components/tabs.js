import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import Image from '../elements/Image';

function Tabs() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }
  
  useEffect(() => {
    return () => {
      heightFix()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])  

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Tools for making 8-bit games</h2>
            <p className="text-xl text-palette-15" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">Wanting to make games that look and feel like they were from the 80s doesn't mean you have to use tools from that era! Enjoy a rich user interface that merges the modern luxuries of today's computers with the nostalgia of 1985.</p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`items-center font-medium py-2 px-4 m-2 group-active:border-0 group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >
                <Image
                      src={require('../images/icons/file-code-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Code</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <Image
                      src={require('../images/icons/file-font-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Fonts</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <Image
                      src={require('../images/icons/file-settings-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Data</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                onClick={() => setTab(4)}
              >
                <Image
                      src={require('../images/icons/file-music-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Music</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(5)}
              >
                <Image
                      src={require('../images/icons/file-sound-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Sounds</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 6 && 'opacity-50'}`}
                onClick={() => setTab(6)}
              >
                <Image
                      src={require('../images/icons/file-sprites-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Sprites</span>
              </button>
              <button
                className={`items-center font-medium py-2 px-4 m-2 group transition duration-500 ${tab !== 7 && 'opacity-50'}`}
                onClick={() => setTab(7)}
              >
                <Image
                      src={require('../images/icons/file-tilemap-icon.svg')}
                      alt="Features tile icon 02"
                      width={92}
                      height={92} />
                <span className="text-palette-15 group-hover:text-palette-14 transition-colors duration-150 ease-in-out">Tilemap</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16 mb-20" data-aos="fade-up" ref={tabs}>
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                <figure className="md:absolute md:left-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-code.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-palette-6">Built-in Text Edtior</h4>
                    <p className="text-lg text-palette-15">If you're looking to edit a text file or code your next game, the built-in Text Editor is ready to go. Use this tool with txt, json, Lua, and C# files complete with line numbers and syntax highlighting.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full" 
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:right-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-fonts.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-palette-6">Make Custom Fonts</h4>
                    <p className="text-lg text-palette-15">With the built-in Font editor, you can customize the existing font or make your own. Each font consists of 8x8 pixel characters. You can even preview your font and letter spacing.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:left-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-chips.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-palette-6">Set The Limitations</h4>
                    <p className="text-lg text-palette-15">Pixel Vision 8 is the only Fantasy Console that lets you fully configure every hardware limitations aspect. You can use this power to make games for classic 8-bit consoles or create your own.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:right-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-songs.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-palette-6">Powerful Music Generator</h4>
                    <p className="text-lg text-palette-15">Introducing the first fully configurable chiptune music generator. Don't know how to make songs for your game? Let Pixel Vision 8's Music Tool help get you started with the press of a button.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:left-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-sounds.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-palette-6">Random Sound Generator</h4>
                    <p className="text-lg text-palette-15">Pick from over a dozen different sound effect templates and let Pixel Vision 8's Sound Tool do the rest. You have full access to each sound effect's properties to tweak it exactly how you want for more advanced users.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 6 */}
              <Transition
                show={tab === 6}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:right-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-sprite.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-palette-6">Working with sprites</h4>
                    <p className="text-lg text-palette-15">The Sprite Editor Tool allows you to preview and edit sprites in memory. This tool is critical to see all of the sprites that are imported into the game and verifying that they are displayed correctly.</p>
                  </div>
                </article>
              </Transition>

              {/* Item 7 */}
              <Transition
                show={tab === 7}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:left-0">
                    <img className="w-full h-full object-cover shadow-2xl" src={require('../images/screenshots/screenshot-tilemap.png')} width="512" height="480" alt="Tabs 01" />
                  </figure>
                  <div className="relative py-8 md:py-32 px-6 md:pr-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-palette-6">Design Your World</h4>
                    <p className="text-lg text-palette-15">The custom Tilemap Tool allows you to layout your level and work with the collision map. Use this special layer to set flags to use in your game. Define what tiles are solid, create invisible spawn points, and set tiles that hurt the player.</p>
                  </div>
                </article>
              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
