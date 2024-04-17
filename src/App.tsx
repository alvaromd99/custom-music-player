import './App.css'
import LinksList from './components/LinksList'
import NormalBtn from './components/NormalBtn'
import musicLogo from './images/logo2.jpeg'
import pageLogo from './images/page-logo.jpeg'

function App() {
  return (
    <div className="font-montse-var">
      <section className="flex overflow-hidden relative justify-center items-center h-screen hero-section before:absolute before:-left-4 before:-top-4 before:z-neg before:w-105 before:h-105 before:bg-hero-image before:bg-cover before:bg-center before:blur-sm before:brightness-20 before:shadow-custom-shadow-2">
        <div className="fixed left-8 top-10 w-8 h-8">
          <img src={pageLogo} alt="logo" />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex gap-16">
            <div className="w-80 h-80">
              <img src={musicLogo} alt="music logo" />
            </div>
            <div className="flex flex-col gap-12 justify-center">
              <div>
                <h1 className="text-6xl font-bold tracking-widest uppercase text-border">
                  StarJam
                </h1>
                <h2 className="text-2xl font-bold text-white uppercase">
                  Denis
                </h2>
              </div>
              <div className="flex gap-2">
                <NormalBtn text="Listen Now" bgColor={true} />
                <NormalBtn text="Share" bgColor={false} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-white uppercase">
              Stream it your way
            </h3>
            <LinksList />
          </div>
        </div>
      </section>
      <section className="overflow-hidden min-h-screen bg-center brightness-20 bg-content-image"></section>
    </div>
  )
}

export default App
