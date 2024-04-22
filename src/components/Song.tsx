import { useCallback, useEffect, useRef, useState } from "react"
import { PauseIcon } from "../icons/PauseIcon"
import { PlayIcon } from "../icons/PlayIcon"

interface SongProps {
  audio: string
  number: number
  name: string
  author: string
}

export default function Song({ audio, number, name, author }: SongProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<number | undefined>(0)

  const handleLoadedMetaData = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [])

  useEffect(() => {
    const audioElement = audioRef.current
    if (!audioElement) return

    audioElement.addEventListener("loadedmetadata", handleLoadedMetaData);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetaData)
    }
  }, [handleLoadedMetaData])

  const handleClick = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex justify-between">
      <audio src={audio} ref={audioRef} />
      <div className="flex items-center gap-6">
        <p>
          {number + 1}
        </p>
        <div onClick={handleClick}>{isPlaying ? <PauseIcon dimensions="1.4em" /> : <PlayIcon dimensions="1.4em" />}</div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{author}</p>
        </div>
      </div>
      <div>{duration !== undefined ? (duration / 60).toFixed(2) : '0'}</div>
    </div>
  )
}
