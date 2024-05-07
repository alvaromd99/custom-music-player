import NormalBtn from './NormalBtn'
import Title from './Title'
import { ShareIcon } from '../icons/ShareIcon'
import musicLogo from '../images/logo2.jpeg'
import { useState } from 'react'
import ShareBtn from './ShareBtn'

export default function Presentation() {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 3000)
    } catch (err) {
      setCopySuccess(false)
    }
  }

  return (
    <div className='flex gap-16 justify-between'>
      <div className='h-imageBig w-imageBig'>
        <img src={musicLogo} alt='music logo' />
      </div>
      <div className='flex flex-col gap-12 justify-center'>
        <div>
          <Title title='NCS' subtitle='No Copyright Sound' />
        </div>
        <div className='flex gap-2'>
          <NormalBtn text='Listen Now' />
          <ShareBtn
            text='Share'
            icon={<ShareIcon dimensions='1em' />}
            handleClick={copyToClipboard}
          />
        </div>
      </div>
      {copySuccess && (
        <div className='absolute top-3 right-3 p-2 text-black bg-white opacity-0 animate-appear'>
          Text has been copied
        </div>
      )}
    </div>
  )
}
