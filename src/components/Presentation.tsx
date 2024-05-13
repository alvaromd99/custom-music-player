import NormalBtn from './NormalBtn'
import Title from './Title'
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
    <div className='flex flex-col items-start gap-12 justify-between lg:justify-around lg:flex-row lg:items-center xl:justify-between'>
      <div className='w-full self-center h-96 max-w-96 lg:w-96 lg:h-96 xl:w-imageBig xl:h-imageBig xl:max-w-max'>
        <img src={musicLogo} alt='music logo' />
        <p className='text-white mt-3 italic'>"Creating magic, one track at a time."</p>
      </div>
      <div className='flex flex-col gap-10 justify-center'>
        <div>
          <Title title='NCS' subtitle='No Copyright Sound' />
        </div>
        <div className='flex gap-4'>
          <NormalBtn text='Listen Now' />
          <ShareBtn
            text='Share'
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
