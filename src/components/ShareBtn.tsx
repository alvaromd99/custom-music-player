import { ShareIcon } from "../icons/ShareIcon"

interface ShareBtnProps {
  text: string
  handleClick: (text: string) => void
}

export default function ShareBtn({ text, handleClick }: ShareBtnProps) {
  return (
    <button
      className='flex h-12 items-center gap-2 bg-transparent px-6 text-center text-xl font-bold text-white outline outline-1 outline-white transition-all duration-300 hover:bg-white hover:text-black hover:outline-white xl:h-16 xl:px-10 xl:text-2xl'
      onClick={() => handleClick('hello')}
    >
      <p><ShareIcon dimensions='1em' /></p>
      <p>{text}</p>
    </button>
  )
}
