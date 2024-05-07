import Song from './Song'
import { tracks } from '../constants/songData'

export default function MusicPlayer() {
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
