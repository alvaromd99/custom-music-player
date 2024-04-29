import './App.css'
import Footer from './components/Footer'
import LinksList from './components/LinksList'
import MusicPlayer from './components/MusicPlayer'
import Presentation from './components/Presentation'
import VideoPlayer from './components/VideoPlayer'
import pageLogo from './images/page-logo.jpeg'

function App() {
  return (
    <div className="font-montse-var">
      <div className="fixed left-10 top-10 h-14 w-14">
        <img src={pageLogo} alt="logo" />
      </div>
      <section className="relative h-screen overflow-hidden px-big pt-48 before:absolute before:-left-4 before:-top-4 before:z-neg before:h-105 before:w-105 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:blur-sm before:brightness-20">
        <div className="flex flex-col gap-20">
          <Presentation />
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold uppercase text-white">
              Stream it your way
            </h3>
            <LinksList />
          </div>
        </div>
      </section>
      <section className='relative text-white min-h-screen overflow-hidden px-big py-10 before:absolute before:left-0 before:top-0 before:z-neg before:h-full before:w-full before:bg-content-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:brightness-20'>
        <section className='mb-20'>
          <MusicPlayer />
        </section>
        <section>
          <VideoPlayer />
        </section>
        <Footer />
      </section>
    </div >
  )
}

export default App
