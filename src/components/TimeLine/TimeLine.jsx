"use client"

import { TimeLineData } from '../../constants/constants';

const Timeline = () => {

  return (
    <section id="about" className="flex flex-col lg:w-full pb-0 px-4 my-0 mx-auto max-w-5xl box-content overflow-hidden">
    
      <h2  className="font-extrabold text-3xl w-full bg-neutral-400 bg-clip-text mb-2 p-0 md:text-5xl md:pb-3 lg:text-5xl">Time Line</h2>
      <div className='w-8 h-1 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 md:w-20 md:h-1 lg:w-20 lg:h-2' ></div>
      <br/>
      <ol class="border-l pt-3 border-neutral-300 dark:border-neutral-500">
        {TimeLineData.map((item, index) => (
          <li>
            <div class="flex-start flex items-center pt-3">
              <div
                class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <h4 class="text-base font-bold tracking-wide text-neutral-500 dark:text-neutral-300">
                {item.year}
              </h4>
            </div>
            <div class="mb-6 ml-4 mt-2">
              <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                {item.text}
              </p>
            </div>
          </li>        
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
