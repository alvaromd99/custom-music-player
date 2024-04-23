import Song from './Song'
import { tracks } from '../songsData/songData'

export default function MusicPlayer() {

  return (
    <div className='text-white'>
      <h3 className='text-4xl font-bold uppercase mb-10'>Track List</h3>
      <div className='flex flex-col gap-6'>
        {tracks.map((track, index) => <Song audio={track.path} number={index} name={track.name} author={track.artist} key={index} />)}
      </div>
    </div>
  )
}
