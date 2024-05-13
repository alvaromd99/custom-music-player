import './App.css'
import Footer from './components/Footer'
import LinksList from './components/LinksList'
import MusicPlayer from './components/MusicPlayer'
import Presentation from './components/Presentation'
import VideoPlayer from './components/VideoPlayer'
import pageLogo from './images/page-logo.jpeg'

// TODO make xl 

function App() {
  return (
    <div className='font-montse-var'>
      <div className='fixed z-40 flex w-full  justify-around items-center px-2 py-2 backdrop-blur-sm bg-black/75 lg:bg-transparent lg:backdrop-blur-0 lg:items-start lg:pt-8 lg:px-8 lg:justify-between'>
        <div className='w-8 h-8 lg:w-12 lg:h-12'>
          <img src={pageLogo} alt='logo' />
        </div>
        <div className='z-10'>
          <LinksList outline={false} dimensions={1.5} isHeader={true} />
        </div>
      </div>
      <section className='relative h-screen overflow-hidden px-6 pt-24 before:absolute before:-left-4 before:-top-4 before:z-neg before:h-105 before:w-105 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:blur-sm lg:pt-40 before:brightness-20 md:px-32 lg:px-28 xl:px-52 2xl:px-big mobile:px-16'>
        <div className='flex flex-col gap-24'>
          <Presentation />
          <div className='flex flex-col gap-6'>
            <h3 className='text-2xl lg:text-4xl font-bold uppercase text-white xl:text-5xl'>
              Stream it your way
            </h3>
            <LinksList outline={true} dimensions={1.5} isHeader={false} />
          </div>
        </div>
      </section>
      <section className='relative min-h-screen overflow-hidden px-6 pb-10 text-white before:absolute before:left-0 before:top-0 before:z-neg before:h-full before:w-full before:bg-content-image before:bg-scroll before:bg-center before:bg-repeat before:brightness-20 md:px-32 xl:px-52 2xl:px-big lg:px-28 mobile:px-16 xl:pt-10'>
        <section className='mb-20'>
          <MusicPlayer />
        </section>
        <section>
          <VideoPlayer />
        </section>
        <Footer />
      </section>
    </div>
  )
}

export default App
