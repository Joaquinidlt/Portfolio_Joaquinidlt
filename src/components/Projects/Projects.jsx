"use client"

import Image from "next/image";
import Link from "next/link";
import { projects } from '../../constants/constants';

const Projects = () => (
  <section className='grid max-w-5xl p-0 my-0 pb-20 sm:pb-40 mx-auto' id="projects">
    <h2  className="font-extrabold text-3xl bg-neutral-400 bg-clip-text mb-2 p-0 md:text-5xl md:pb-3 lg:text-5xl">Projects</h2>
    <div className='w-8 h-1 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 md:w-20 md:h-1 lg:w-20 lg:h-2' ></div>
    <br/>
    <section className='grid grid-cols-1 sm:grid-cols-2 mt-7 mx-auto gap-12' >
      {projects.map(({id, image, title, tags, description, source, visit, youtube}) => (
        <div className="rounded-lg bg-sky-950 shadow-slate-100 text-center justify-center w-80 md:w-96" key={id}>
          <Image src={image} width={300} height={200} className="w-full h-42 md:h-52 rounded-xl p-2" alt="Picture of the project"/>
          <div className="w-full text-center z-20">
            <h3 className="text-slate-300 text-4xl font-medium tracking-wide py-2 px-0"> {title} </h3>
            <hr className="w-12 h-1 mt-5 mb-5 ml-auto mr-auto rounded-none bg-yellow-500"/>
          </div>
          <div className="flex w-full justify-center">
            <p className="w-11/12 p-1 md:py-0 md:px-12 text-gray-400 text-xl text-justify"> {description} </p>          
          </div>
          <div className="flex flex-col justify-center items-center mt-7">
            <h3>Stack</h3>
            <ul className="flex content-around p-6" id>
              {tags.map((tag, i) => (
                <li className="text-stone-500 text-sm p-1" key={i}> {tag} </li>
              ))}
            </ul>
            <ul className="list-none p-0 flex content-around mt-4 mb-10 ml-0 mr-0 gap-2">
                {visit && 
                  <Link href={`${visit}`} target='_blank' className="text-white text-base py-2 px-4 bg-sky-950 rounded-lg border border-white hover:text-white hover:bg-slate-600">
                    Code
                  </Link>                
                }
                {source && 
                  <Link href={`${source}`} target='_blank' className="text-white text-base py-2 px-4 bg-sky-950 rounded-lg border border-white hover:text-white hover:bg-slate-600">
                    Link
                  </Link>
                }
                {youtube && 
                  <Link href={`${youtube}`} target='_blank' className="text-white text-base py-2 px-4 bg-sky-950 rounded-lg border border-white hover:text-white hover:bg-slate-600">
                    Youtube
                  </Link>
                }
            </ul>
          </div>
        </div>
      ))}
    </section>
  </section>
);

export default Projects;