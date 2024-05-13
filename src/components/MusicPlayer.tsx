import Song from './Song'
import { tracks } from '../constants/songData'

export default function MusicPlayer() {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold uppercase lg:text-4xl lg:mb-8 xl:text-5xl xl:mb-10">Track List</h3>
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
