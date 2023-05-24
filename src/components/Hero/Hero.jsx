"use client"

const Hero = () => (
  <section className="flex flex-col pt-10 pl-4 sm:pl-20 sm:pr-4 pb-0 my-0 mx-auto max-w-5xl box-content overflow-hidden absolute">
    <div className="flex flex-col my-0 mx-auto sm:w-4/5 md:w-full">
      <h2 className="font-extrabold text-2xl sm:text-3xl max-w-full bg-neutral-400 bg-clip-text mb-2 p-0 md:text-5xl md:pb-3 ">
        Joaquin Ignacio De la Torre
      </h2>
      <p className="max-w-3xl text-base pb-4 font-light md:text-xl md:max-w-2xl md:pb-6 lg:pb-14 lg:text-2xl ">
        Full Stack Web Developer in JavaScript <br/>
        Focused in Front-end.
      </p>
    </div>
  </section>
);

export default Hero;