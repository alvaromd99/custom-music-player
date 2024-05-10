interface ListIconProps {
  outline: boolean
  icon: JSX.Element
}

export default function ListIcon({ outline, icon }: ListIconProps) {
  return (
    <li className={`flex justify-center items-center w-10 h-10 lg:w-16 lg:h-16 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
      <a href="https://www.facebook.com/NoCopyrightSounds/" target="_blank">
        {icon}
      </a>
    </li>
  )
}
