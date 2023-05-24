"use client"
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const Technologies = () =>  (
  <section id="tech" className="flex flex-col px-4 pb-10 my-0 mx-auto max-w-5xl box-content overflow-hidden">

    <h2  className="font-extrabold text-3xl w-full bg-neutral-400 bg-clip-text mb-2 p-0 md:text-5xl md:pb-3 lg:text-5xl">Technologies</h2>
    <div className='w-8 h-1 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 md:w-20 md:h-1 lg:w-20 lg:h-2' ></div>
    <br/>
    <p className="w-full p-1 md:py-0 md:px-12 text-gray-400 text-xl text-justify">
      I've worked with a range a technologies in the web develompen world.
      From Back-end to Front-End.
    </p>
    <ul className="list-none p-0 flex flex-col content-around mt-8 mb-8 ml-0 mr-0 sm:grid sm:grid-cols-3 gap-10 ">
      <li className="max-w-xs flex flex-col">
        <DiReact size="3rem" />
        <div className='flex flex-col ml-4 sm:ml-0'>
          <h4 className="text-white mb-1 sm:mb-2 text-xl font-bold tracking-wide">Front-End</h4>
          <p className='text-base md:text-lg text-slate-400'>
            Experience with <br/>
            - JavaScript <br/>
            - TypeScript <br/>
            - React <br/>
            - Next.js <br/>
            - React Native <br/>
            - Redux <br/>
            - GraphQL (Apollo) <br/>
            - HTML 5 <br/>
            - CSS 3 <br/>
            - SASS <br/>
            - Material UI
          </p>
        </div>
      </li>
      <li className="max-w-xs flex flex-col">
        <DiFirebase size="3rem" />
        <div className='flex flex-col ml-4 sm:ml-0'>
          <h4 className="text-white mb-1 sm:mb-2 text-xl font-bold tracking-wide">Back-End</h4>
          <p className='text-base md:text-lg text-slate-400'>
            Experience with <br/>
            - Node.js <br/>
            - Express.js <br/>
            - PostgresSQL <br/>
            - MongoDB 
          </p>
        </div>
      </li>
       <li className="max-w-xs flex flex-col">
        <DiZend size="3rem" />
        <div className='flex flex-col ml-4 sm:ml-0'>
          <h4 className="text-white mb-1 sm:mb-2 text-xl font-bold tracking-wide">UI/UX</h4>
          <p className='text-base md:text-lg text-slate-400'>
            Experience with <br/>
            Tools like Figma.
          </p>
        </div>
      </li> 
    </ul>
  </section>
);

export default Technologies;
