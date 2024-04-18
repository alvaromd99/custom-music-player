interface NormalBtnProps {
  text: string
  bgColor: boolean
  icon: JSX.Element
}

export default function NormalBtn({ text, bgColor, icon }: NormalBtnProps) {
  return (
    <button
      className={`flex items-center gap-2 text-center text-white text-xl px-12 py-4 outline outline-1 transition-all duration-300 hover:bg-white hover:text-black hover:outline-white ${bgColor
        ? 'bg-green-400 outline-green-400'
        : 'bg-transparent outline-white'
        }`}
    >
      <p>{icon}</p>
      <p>{text}</p>
    </button>
  )
}
