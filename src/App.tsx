import './App.css'
import NormalBtn from './components/NormalBtn'
import musicLogo from './images/logo2.jpeg'
import pageLogo from './images/page-logo.jpeg'

function App() {
	return (
		<div className='font-montse-var'>
			<section className='relative flex items-center justify-center h-screen overflow-hidden hero-section before:absolute before:-left-10 before:-top-10 before:z-neg before:h-120 before:w-120 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow before:blur-sm before:brightness-20'>
				<div className='fixed w-8 h-8 left-8 top-10'>
					<img src={pageLogo} alt='logo' />
				</div>
				<div className='flex gap-6'>
					<div className='h-60 w-60'>
						<img src={musicLogo} alt='music logo' />
					</div>
					<div className='flex flex-col justify-center gap-12'>
						<div>
							<h1 className='text-4xl font-bold tracking-widest uppercase text-border'>
								StarJam
							</h1>
							<h2 className='text-2xl font-bold text-white uppercase'>Denis</h2>
						</div>
						<div className='flex gap-2'>
							<NormalBtn text='Listen Now' bgColor={true} />
							<NormalBtn text='Share' bgColor={false} />
						</div>
					</div>
				</div>
			</section>
			<section className='content-section'></section>
		</div>
	)
}

export default App
