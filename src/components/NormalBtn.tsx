import { tracks } from '../constants/songData'
import useAudioStore from '../store/UseAudioStore'

interface NormalBtnProps {
	text: string
	icon: JSX.Element
}

export default function NormalBtn({ text, icon }: NormalBtnProps) {
	const { playFromPathName } = useAudioStore()
	const path = tracks[0].path
	return (
		<button
			className='flex gap-2 items-center px-12 py-4 text-xl text-center text-white bg-green-400 transition-all duration-300 outline outline-1 hover:bg-white hover:text-black hover:outline-white outline-green-400'
			onClick={() => playFromPathName(path)}
		>
			<p>{icon}</p>
			<p>{text}</p>
		</button>
	)
}
