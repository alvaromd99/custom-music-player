import { AppleIcon } from "../icons/AppleIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface LinksListProps {
  outline: boolean,
  column: boolean
  dimensions: number
}

export default function LinksList({ outline, column, dimensions }: LinksListProps) {
  return (
    <ul className={`flex ${column ? 'flex-col' : ''}`}>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <AppleIcon dimensions={`${dimensions}em`} />
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <SpotifyIcon dimensions={`${dimensions}em`} />
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <YoutubeIcon dimensions={`${dimensions}em`} />
      </li>
    </ul >
  )
}
