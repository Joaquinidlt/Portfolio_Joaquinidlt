"use client"
import Link from 'next/link';

const data = [
  { text: 'Full Stack Developer Certificate', pdf: '/images/CertificadoFSD.pdf'},
  { text: 'React-TypeScript-Redux-GraphQL-Test Certificate', pdf: '/images/React-Developer-2023-Redux-Hooks-GrephQL.pdf'},
  { text: 'React-Hooks-Rooter-Redux-Next.js Certificate', pdf: '/images/React-hooks-rooter-redux-next.pdf'},
  { text: 'React-Native-E-Commerce-IOS-Andoid Certificate', pdf: '/images/React-Native-E-Commerce-iOS-Andoid.pdf'},
  { text: 'Certificate Design Patterns', pdf: '/images/PatronesDeDiseñoCertificate.pdf'},  
  { text: 'English EF SET Certificate', pdf: '/images/EF-SET-Certificate.pdf'},
  { text: 'English, Spanish, Portuguese and German in process.', pdf: ''},
  { text: 'Business Administrator', pdf: '' },
];

const Acomplishments = () => (
  <section id="acomplishments" className="flex flex-col mt-0 mb-0 ml-auto mr-auto p-0 pt-20 max-w-5xl h-full">
    <h2  className="font-extrabold text-3xl bg-neutral-400 bg-clip-text mb-2 ml-4 lg:ml-0 p-0 md:text-5xl md:pb-3 lg:text-5xl">Acomplishments</h2>
    <div className='w-8 h-1 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-4 md:w-20 md:h-1 lg:w-20 lg:h-2' ></div>
    <br/>
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-3 md:grid-cols-4 gap-2 px-2">
      {data.map((card, index) => (
        <div key={index} className="flex bg-sky-900 rounded-lg h-24 sm:h-32 md:h-32 hover:bg-sky-700">
          <Link href={`${card.pdf}`} target="_blank" className="text-md mt-3 ml-2 mr-2"> {card.text} </Link>          
        </div>
      ))}
    </div>
  </section>
);

export default Acomplishments;
