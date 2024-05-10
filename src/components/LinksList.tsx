import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { SoundcloudIcon } from "../icons/SoundcloudIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import ListIcon from "./ListIcon";

interface LinksListProps {
  outline: boolean,
  dimensions: number
  isHeader: boolean
}

export default function LinksList({ outline, dimensions, isHeader }: LinksListProps) {
  return (
    <ul className={`flex ${isHeader ? 'flex-row gap-7 lg:gap-0 lg:flex-col' : ''}`}>
      <ListIcon outline={outline} icon={<SpotifyIcon dimensions={`${dimensions}em`} />} />
      <ListIcon outline={outline} icon={<YoutubeIcon dimensions={`${dimensions}em`} />} />
      <ListIcon outline={outline} icon={<SoundcloudIcon dimensions={`${dimensions}em`} />} />
      <ListIcon outline={outline} icon={<InstagramIcon dimensions={`${dimensions}em`} />} />
      <ListIcon outline={outline} icon={<FacebookIcon dimensions={`${dimensions}em`} />} />
    </ul >
  )
}
