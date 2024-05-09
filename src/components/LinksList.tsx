import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { SoundcloudIcon } from "../icons/SoundcloudIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface LinksListProps {
  outline: boolean,
  dimensions: number
  isHeader: boolean
}

export default function LinksList({ outline, dimensions, isHeader }: LinksListProps) {
  return (
    <ul className={`flex ${isHeader ? 'flex-row gap-7 lg:flex-col' : ''}`}>
      <li className={`flex justify-center items-center w-10 h-10 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://open.spotify.com/playlist/7sZbq8QGyMnhKPcLJvCUFD?si=a4cf1983d05b4027&nd=1&dlsi=885e344ddd284839" target="_blank">
          <SpotifyIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-10 h-10 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.youtube.com/nocopyrightsounds" target="_blank">
          <YoutubeIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-10 h-10 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://soundcloud.com/nocopyrightsounds" target="_blank">
          <SoundcloudIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-10 h-10 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.instagram.com/nocopyrightsounds/" target="_blank">
          <InstagramIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-10 h-10 z-20 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.facebook.com/NoCopyrightSounds/" target="_blank">
          <FacebookIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
    </ul >
  )
}
