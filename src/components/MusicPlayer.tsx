import Song from './Song'
import { tracks } from '../songsData/songData'
import { useState } from 'react'

export default function MusicPlayer() {
	const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null)

	const handlePlay = (audioReference: HTMLAudioElement) => {
		if (currentSong && currentSong !== audioReference) {
			currentSong.pause()
			audioReference.play()
		} else {
			currentSong?.pause()
		}
		setCurrentSong(audioReference)
	}

	return (
		<div>
			<h3 className="mb-10 text-4xl font-bold uppercase">Track List</h3>
			<div className="flex flex-col gap-6">
				{tracks.map((track, index) => (
					<Song
						audio={track.path}
						number={index}
						name={track.name}
						author={track.artist}
						key={index}
						onPlay={handlePlay}
					/>
				))}
			</div>
		</div>
	)
}
