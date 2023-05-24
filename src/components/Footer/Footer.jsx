"use client"
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className='flex w-full items-start content-center justify-center flex-col'>
      <ul className="flex flex-row w-full justify-between border-slate-50 gap-4 p-4 pt-8 max-w-xl">
        <div className="flex flex-col max-w-xs w-full">
          <h4 className="text-sm text-slate-500">Call</h4>
          <Link href="tel: +49-157-39712502" className="text-base text-slate-100 mb-4 ease-in relative left-0 hover:left-2">+49-157-39712502</Link>
        </div>
        <div className="flex flex-col max-w-xs w-full">
          <h4 className="text-sm text-slate-500">Email</h4>
          <Link href="mailto:joaquindlt16@gmail.com" className="text-base text-slate-100 mb-4 ease-in relative left-0 hover:left-2">joaquindlt16@gmail.com</Link>
        </div>
      </ul>
      <div className="flex w-full flex-wrap items-center justify-between sm:w-full">
        <div className="flex items-baseline flex-wrap mr-auto md:flex-col">
          <p className="text-slate-50 tracking-wide text-lg p-4">One goal at a time</p>
        </div>
        <div className="flex items-center relative right-2 md:justify-center md:flex-wrap">
          <Link href="https://github.com/Joaquinidlt" target='_blank' className="text-slate-50 rounded-full p-2 ease-in-out hover:bg-teal-900 hover:scale-1.2 hover:cursor-pointer">
            <AiFillGithub size="2rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/joaquin-de-la-torre-developer/" target='_blank' className="text-slate-50 rounded-full p-2 ease-in-out hover:bg-teal-900 hover:scale-1.2 hover:cursor-pointer">
            <AiFillLinkedin size="2rem" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
