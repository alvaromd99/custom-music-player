import { useRef } from "react"

interface SongProps {
  audio: string
  number: number
}

export default function Song({ audio, number }: SongProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  console.log(number)

  const handleClick = () => {
    if (!audioRef.current) return

    audioRef.current?.play()
  }

  return (
    <div onClick={handleClick}>
      Play
      <audio src={audio} />
    </div>
  )
}
