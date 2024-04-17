import { AppleIcon } from "../icons/AppleIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export default function LinksList() {
  return (
    <ul className="flex">
      <li className="flex justify-center items-center w-16 h-16 outline-white outline-1 outline">
        <AppleIcon />
      </li>
      <li className="flex justify-center items-center w-16 h-16 outline-white outline-1 outline">
        <SpotifyIcon />
      </li>
      <li className="flex justify-center items-center w-16 h-16 outline-white outline-1 outline">
        <YoutubeIcon />
      </li>
    </ul>
  )
}
