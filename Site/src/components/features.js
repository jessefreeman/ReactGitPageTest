import React from 'react';
import Image from '../elements/Image';

function Features() {
  return (
<section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">
            
            {/* alert box */}
            <div class="flex mb-20 mx-auto max-w-3xl bg-palette-5 border-t-4 border-palette-6 rounded-b text-palette-15 px-4 py-3 shadow-md" role="alert">
            <Image
                src={require('../images/icons/file-drive-icon.svg')}
                alt="Features tile icon 02"
                width={92}
                height={92} />
            
                <div className="ml-5">
                    <p class="h4">One workspace, infinite workflows</p>
                    <p class="text-m">You are not limited to Pixel Vision 8's built-in tools. Since PV8's Workspace drive lives in your computer's Documents folder, you can create a workflow based on how you want to make games.</p>
                </div>
            </div>
            
            {/* Items */}
            <div className="grid gap-20">

                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                        <img className="max-w-full mx-auto md:max-w-none h-auto shadow-xl" src={require('../images/screenshots/RunningGamesPixelVisionOS_image_0.svg')} width="512" height="480" alt="Features 01" />
                    </div>
                    {/* Content */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                            <div className="text-xl text-palette-6 mb-2">No command line</div>
                            <h3 className="h3 mb-3">Full desktop experience</h3>
                            <p className="text-xl text-gray-400 mb-4">You'll be right at home with an easy to use icon-based file system made up of a desktop, windows, and full drag and drop support. Pixel Vision OS also includes built-in tools like a text editor, image previewer, and settings manager to make working with game projects easier.</p>
                            <ul className="text-lg text-gray-400 -mb-2">
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Custom 8-bit OS</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Full keyboard and mouse support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Built-in tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-up">
                        <img className="max-w-full mx-auto md:max-w-none h-auto shadow-xl" src={require('../images/screenshots/workspace-screenshot.png')} width="512" height="480" alt="Features 02" />
                    </div>
                    {/* Content */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                            <div className="text-xl text-palette-6 mb-2">Unique workflow</div>
                            <h3 className="h3 mb-3">Use external editors</h3>
                            <p className="text-xl text-gray-400 mb-4">You can use Pixel Vision OS or your computer’s file system to create folders, add PV8 games or create files in the Workspace folder. Any changes you make on your computer will show up in Pixel Vision OS’s Workspace drive.</p>
                            <ul className="text-lg text-gray-400 -mb-2">
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Visual Studio Code and Atom plugins</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Aseprie, Photoshop, and more</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Save Tiled json files</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>
    </div>
</section>
  );
}

export default Features;