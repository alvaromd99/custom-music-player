import './App.css'
import pageLogo from './images/page-logo.jpeg'

function App() {
	return (
		<div className=''>
			<section className='hero-section h-screen overflow-hidden relative before:bg-hero-image before:brightness-20 before:blur-sm before:-top-10 before:-left-10 before:w-120 before:h-120 before:absolute before:bg-cover before:bg-center'>
				<div className='fixed top-10 left-8 w-8 h-8'>
					<img src={pageLogo} alt='logo' />
				</div>
				<ul>
					<li>Inst</li>
				</ul>
			</section>
			<section className='content-section'></section>
		</div>
	)
}

export default App
