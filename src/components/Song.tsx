import { useCallback, useEffect, useRef, useState } from 'react'
import { PauseIcon } from '../icons/PauseIcon'
import { PlayIcon } from '../icons/PlayIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { volume } from '../constants/songData'

interface SongProps {
	audio: string
	number: number
	name: string
	author: string
	onPlay: (audioReference: HTMLAudioElement) => void
	isPlaying: boolean
	currentSong: HTMLAudioElement | null
}

export default function Song({
	audio,
	number,
	name,
	author,
	onPlay,
	isPlaying,
	currentSong,
}: SongProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [duration, setDuration] = useState<number | undefined>(0)

	const handleLoadedMetaData = useCallback(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume
			setDuration(audioRef.current.duration)
		}
	}, [])

	useEffect(() => {
		const audioElement = audioRef.current
		if (!audioElement) return

		audioElement.addEventListener('loadedmetadata', handleLoadedMetaData)

		return () => {
			audioElement.removeEventListener('loadedmetadata', handleLoadedMetaData)
		}
	}, [handleLoadedMetaData])

	const handleClick = () => {
		if (audioRef.current) {
			onPlay(audioRef.current)
		}
	}

	return (
		<div className="flex justify-between">
			<audio src={audio} ref={audioRef} />
			<div className="flex gap-6 items-center">
				<p>{number + 1}</p>
				<div onClick={handleClick} className="cursor-pointer">
					{isPlaying && currentSong === audioRef.current ? (
						<PauseIcon dimensions="1.4em" />
					) : (
						<PlayIcon dimensions="1.4em" />
					)}
				</div>
				<div>
					<p className="font-bold">{name}</p>
					<p>{author}</p>
				</div>
			</div>
			<div className="flex gap-4 items-center">
				<div>
					<div>{duration !== undefined ? (duration / 60).toFixed(2) : '0'}</div>
				</div>
				<div>
					<ShareIcon dimensions="1.4em" />
				</div>
			</div>
		</div>
	)
}
