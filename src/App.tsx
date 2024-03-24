import './App.css'

function App() {
  return (
    <div className='font-montse-var overflow-y-scroll'>
      <section className='first-section h-screen overflow-hidden shadow-custom-shadow before:bg-hero-bg-image before:bg-center before:bg-cover before:absolute'>
        <header className='w-full'>
          <img src='/src/images/logo.jpeg' className='w-20 h-20' />
        </header>
        <div></div>
      </section>
      <section className='second-section h-screen overflow-hidden relative'></section>
    </div>
  )
}

export default App
