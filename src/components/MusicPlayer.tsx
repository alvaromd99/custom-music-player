import Song from './Song'
import { songsData } from '../songsData/songData'

export default function MusicPlayer() {

  return (
    <div className='text-white'>
      <h3 className='text-4xl font-bold uppercase mb-24'>Track List</h3>
      <div className='flex flex-col gap-6'>
        {songsData.map((song, index) => <Song audio={song.path} number={index} key={index} />)}
      </div>
    </div>
  )
}
