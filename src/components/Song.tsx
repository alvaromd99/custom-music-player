import { useRef } from "react"

interface SongProps {
  audio: string
  number: number
}

export default function Song({ audio, number }: SongProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <div onClick={handleClick}>
      Play
      <audio src={audio} ref={audioRef} />
    </div>
  )
}
