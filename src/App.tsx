import './App.css'
import LinksList from './components/LinksList'
import Presentation from './components/Presentation'

import pageLogo from './images/page-logo.jpeg'

function App() {
  return (
    <div className="font-montse-var">
      <div className="fixed left-8 top-10 h-8 w-8">
        <img src={pageLogo} alt="logo" />
      </div>
      <section className="hero-section relative h-screen overflow-hidden px-big pt-48 before:absolute before:-left-4 before:-top-4 before:z-neg before:h-105 before:w-105 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:blur-sm before:brightness-20">
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
      <section className="min-h-screen overflow-hidden bg-content-image bg-center brightness-20"></section>
    </div>
  )
}

export default App
