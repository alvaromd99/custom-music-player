import './App.css'
import musicLogo from './images/logo2.jpeg'
import pageLogo from './images/page-logo.jpeg'

function App() {
  return (
    <div className='font-montse-var'>
      <section className='relative flex items-center justify-center h-screen overflow-hidden hero-section before:bg-hero-image before:brightness-20 before:blur-sm before:-top-10 before:-left-10 before:w-120 before:h-120 before:absolute before:bg-cover before:bg-center before:z-neg before:shadow-custom-shadow'>
        <div className='fixed w-8 h-8 top-10 left-8'>
          <img src={pageLogo} alt='logo' />
        </div>
        <div className='flex gap-6'>
          <div className='w-52 h-52'>
            <img src={musicLogo} alt='music logo' />
          </div>
          <div className='flex flex-col justify-center gap-8'>
            <div>
              <h1 className='text-xl text-white'>StarJam</h1>
              <h2 className=''>Denis</h2>
            </div>
            <div>
              <button>Listen Now</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </section>
      <section className='content-section'></section>
    </div>
  )
}

export default App
