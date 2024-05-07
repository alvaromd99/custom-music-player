import './App.css'
import Footer from './components/Footer'
import LinksList from './components/LinksList'
import MusicPlayer from './components/MusicPlayer'
import Presentation from './components/Presentation'
import VideoPlayer from './components/VideoPlayer'
import pageLogo from './images/page-logo.jpeg'

// TODO Finish the footer (footer newsletter)

function App() {
  return (
    <div className='font-montse-var'>
      <div className='fixed top-10 left-10 w-14 h-14'>
        <img src={pageLogo} alt='logo' />
      </div>
      <section className='overflow-hidden relative pt-48 h-screen px-big before:absolute before:-left-4 before:-top-4 before:z-neg before:h-105 before:w-105 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:blur-sm before:brightness-20 md:px-52'>
        <div className='flex flex-col gap-20'>
          <Presentation />
          <div className='flex flex-col gap-6'>
            <h3 className='text-4xl font-bold text-white uppercase'>
              Stream it your way
            </h3>
            <LinksList />
          </div>
        </div>
      </section>
      <section className='overflow-hidden relative py-10 min-h-screen text-white px-big before:absolute before:left-0 before:top-0 before:z-neg before:h-full before:w-full before:bg-content-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:brightness-20 md:px-52'>
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
