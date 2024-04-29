export default function VideoPlayer() {
  return (
    <div>
      <h3 className='mb-10 text-4xl font-bold uppercase' > Track List</h3>
      <div className="relative aspect-video h-full w-full">
        <iframe className="absolute inset-0 left-0 top-0 h-full w-full" width="560" height="315" src="https://www.youtube-nocookie.com/embed/KbC5_JEhqL8?si=0tEugcUxZwyyOL75" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}
