import { PauseIcon } from '../icons/PauseIcon'
import { PlayIcon } from '../icons/PlayIcon'
import useAudioStore from '../store/UseAudioStore'

interface NormalBtnProps {
  text: string
}

export default function NormalBtn({ text }: NormalBtnProps) {
  const { currentSong, isPlaying, play, pause, firstSong } = useAudioStore()

  const handleClick = () => {
    if (firstSong) {
      if (isPlaying && firstSong === currentSong) {
        pause()
      } else {
        play(firstSong)
      }
    }
  }
  return (
    <button
      className='flex h-10 gap-2 items-center px-6 py-4 text-md text-center text-white font-bold bg-green-700 transition-all duration-300 outline outline-1 hover:bg-white hover:text-black hover:outline-white outline-green-700'
      onClick={handleClick}
    >{isPlaying && currentSong === firstSong ? (
      <p><PauseIcon dimensions="1em" /></p>) : (
      <p><PlayIcon dimensions="1em" /></p>
    )}
      <p>{text}</p>
    </button>
  )
}
