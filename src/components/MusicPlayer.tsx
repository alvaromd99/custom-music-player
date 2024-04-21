import song1 from '../audios/chasing-the-dream.mp3'
import song2 from '../audios/dreamland-odyssey.mp3'
import song3 from '../audios/dreamweaver.mp3'
import song4 from '../audios/dreamy-delight.mp3'
import song5 from '../audios/enigmatic-pathways.mp3'
import song6 from '../audios/ethereal-journey.mp3'
import song7 from '../audios/ethereal-vistas.mp3'
import song8 from '../audios/flickering-embers.mp3'
import song9 from '../audios/infinite-horizons.mp3'
import song10 from '../audios/luminescent-dreams.mp3'
import song11 from '../audios/moments-of-grace.mp3'
import Song from './Song'

export default function MusicPlayer() {
  const songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11]

  return (
    <div className='text-white'>
      <h3 className='text-4xl font-bold uppercase mb-24'>Track List</h3>
      <div className='flex flex-col gap-6'>
        {songs.map((song, index) => <Song audio={song} number={index} key={index} />)}
      </div>
    </div>
  )
}
