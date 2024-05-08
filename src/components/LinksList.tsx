import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { SoundcloudIcon } from "../icons/SoundcloudIcon";
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
        <a href="https://open.spotify.com/playlist/7sZbq8QGyMnhKPcLJvCUFD?si=a4cf1983d05b4027&nd=1&dlsi=885e344ddd284839" target="_blank">
          <SpotifyIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.youtube.com/nocopyrightsounds">
          <YoutubeIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://soundcloud.com/nocopyrightsounds">
          <SoundcloudIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.instagram.com/nocopyrightsounds/">
          <InstagramIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
      <li className={`flex justify-center items-center w-16 h-16 ${outline ? 'outline-white outline-1 outline' : ''}`}>
        <a href="https://www.facebook.com/NoCopyrightSounds/">
          <FacebookIcon dimensions={`${dimensions}em`} />
        </a>
      </li>
    </ul >
  )
}
