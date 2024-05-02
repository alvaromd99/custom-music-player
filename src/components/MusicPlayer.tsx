import Song from './Song'
import { tracks } from '../constants/songData'

export default function MusicPlayer() {
  // const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null)
  // const [isPlaying, setIsPlaying] = useState(false)
  //
  // const handlePlay = (audioReference: HTMLAudioElement) => {
  // 	if (!audioReference) return
  //
  // 	if (!currentSong) {
  // 		audioReference.play()
  // 		setIsPlaying(true)
  // 		setCurrentSong(audioReference)
  // 	} else if (currentSong && currentSong !== audioReference) {
  // 		currentSong.pause()
  // 		audioReference.play()
  // 		setIsPlaying(true)
  // 		setCurrentSong(audioReference)
  // 	} else if (currentSong && currentSong === audioReference && !isPlaying) {
  // 		audioReference.play()
  // 		setIsPlaying(true)
  // 	} else {
  // 		currentSong.pause()
  // 		setIsPlaying(false)
  // 	}
  // }

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
          />
        ))}
      </div>
    </div>
  )
}
