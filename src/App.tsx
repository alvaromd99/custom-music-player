import './App.css'
import LinksList from './components/LinksList'
import MusicPlayer from './components/MusicPlayer'
import Presentation from './components/Presentation'
import pageLogo from './images/page-logo.jpeg'

function App() {
	return (
		<div className="font-montse-var">
			<div className="fixed top-10 left-10 w-14 h-14">
				<img src={pageLogo} alt="logo" />
			</div>
			<section className="overflow-hidden relative pt-48 h-screen hero-section px-big before:absolute before:-left-4 before:-top-4 before:z-neg before:h-105 before:w-105 before:bg-hero-image before:bg-cover before:bg-center before:shadow-custom-shadow-2 before:blur-sm before:brightness-20">
				<div className="flex flex-col gap-20">
					<Presentation />
					<div className="flex flex-col gap-6">
						<h3 className="text-4xl font-bold text-white uppercase">
							Stream it your way
						</h3>
						<LinksList />
					</div>
				</div>
			</section>
			<section className="overflow-hidden min-h-screen bg-center bg-content-image brightness-20">
				<MusicPlayer />
			</section>
		</div>
	)
}

export default App
