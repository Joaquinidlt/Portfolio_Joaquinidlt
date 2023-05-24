import Hero from '../components/Hero/Hero'
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import TimeLine from '../components/TimeLine/TimeLine'
import Acomplishments from '../components/Acomplishments/Acomplishments'

export default function Home() {
  return (
    <main className="flex w-screen md:w-full min-h-screen flex-col items-center relative">
        <section className='flex w-full flex-row items-start pb-60 sm:pt-32'>
          <Hero/>
          <BackgroundAnimation/>
        </section>
        <section className="flex max-w-5xl min-h-screen flex-col items-center relative top-0 sm:top-24 mb-14">
          <Projects/>
          <Technologies/>
          <TimeLine/>
          <Acomplishments/>
        </section>
    </main>
  )
}
