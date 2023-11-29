"use client"
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () =>  (
  <div className="flex flex-row w-full justify-between gap-4 relative">
    <div className="flex flex-row content-center m-3 mt-4">
      <span className="text-2xl">Joaquinidlt</span>
    </div>
    <div className="hidden sm:flex sm:relative min-w-min sm:top-16 sm:justify-around sm:gap-6 md:top-0 md:mt-4 ">
      <Link href="#projects" className="text-xl text-slate-50 ease-in-out hover:text-slate-300 hover:cursor-pointer">
        Projects
      </Link>
      <Link href="#tech" className="text-xl text-slate-50 ease-in-out hover:text-slate-400 hover:cursor-pointer">
        Technologies
      </Link>
      <Link href="#about" className="text-xl text-slate-50 ease-in-out hover:text-slate-300 hover:cursor-pointer">
        Time Line
      </Link>
      <Link href="#acomplishments" className="text-xl text-slate-50 ease-in-out hover:text-slate-300 hover:cursor-pointer">
        Acomplishments
      </Link>
      <Link href="/InvestmentCalculator" className="text-xl text-slate-50 ease-in-out hover:text-slate-300 hover:cursor-pointer">
        Investment Calculator
      </Link>
    </div>
    <div className="flex justify-end items-center relative right-2">
      <Link href="https://github.com/Joaquinidlt" target='_blank' className="text-slate-50 rounded-full p-2 ease-in-out hover:bg-teal-900 hover:scale-1.2 hover:cursor-pointer">
        <AiFillGithub size="2rem" />
      </Link>
      <Link href="https://www.linkedin.com/in/joaquin-de-la-torre-developer/" target='_blank' className="text-slate-50 rounded-full p-2 ease-in-out hover:bg-teal-900 hover:scale-1.2 hover:cursor-pointer">
        <AiFillLinkedin size="2rem" />
      </Link>
    </div>
  </div>
);

export default Header;
