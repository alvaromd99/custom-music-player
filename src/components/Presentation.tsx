import NormalBtn from './NormalBtn'
import Title from './Title'
import { PlayIcon } from '../icons/PlayIcon'
import { ShareIcon } from '../icons/ShareIcon'
import musicLogo from '../images/logo2.jpeg'

export default function Presentation() {
  return (
    <div className="flex justify-between gap-16">
      <div className="h-imageBig w-imageBig">
        <img src={musicLogo} alt="music logo" />
      </div>
      <div className="flex flex-col justify-center gap-12">
        <div>
          <Title title='Starjam' subtitle='Denis' />
        </div>
        <div className="flex gap-2">
          <NormalBtn text="Listen Now" bgColor={true} icon={<PlayIcon dimensions='1em' />} />
          <NormalBtn text="Share" bgColor={false} icon={<ShareIcon dimensions='1em' />} />
        </div>
      </div>
    </div>
  )
}
