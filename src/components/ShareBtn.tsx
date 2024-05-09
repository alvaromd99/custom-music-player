interface ShareBtnProps {
  text: string
  icon: JSX.Element
  handleClick: (text: string) => void
}

export default function ShareBtn({ text, icon, handleClick }: ShareBtnProps) {
  return (
    <button
      className='flex h-12 gap-2 items-center px-6 text-xl text-center font-bold text-white bg-transparent transition-all duration-300 outline-white outline outline-1 hover:bg-white hover:text-black hover:outline-white'
      onClick={() => handleClick('hello')}
    >
      <p>{icon}</p>
      <p>{text}</p>
    </button>
  )
}
