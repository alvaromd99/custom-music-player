import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { ArrowRightIcon } from "../icons/ArrowRightIcon"

type ShowInfoState = 'info' | 'error' | null

export default function NewsLetter() {
  const [inputValue, setInputValue] = useState("")
  const [showInfo, setShowInfo] = useState<ShowInfoState>(null)
  const [error, setError] = useState(false)
  const emailValue = useRef("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (regex.test(inputValue)) {
      emailValue.current = inputValue
      setShowInfo('info')
      setError(false)
      setInputValue("")
    } else {
      setShowInfo('error')
      setError(true)
    }
    setTimeout(() => setShowInfo(null), 4500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col justify-around">
      <p className="text-2xl font-bold uppercase text-gray-400">Monstercat news</p>
      <p className="italic">Don't miss a thing, stay up to date with the latest news from us.</p>
      <div className="mt-4 flex items-center justify-between border-b-gray-400">
        <input className="w-4/5 bg-transparent p-2 outline-none" type="email" value={inputValue} onChange={handleChange} placeholder="Enter email" />
        <button type="submit" className="px-4 py-1 transition-all duration-300 hover:bg-white hover:text-black"><ArrowRightIcon /></button>
      </div>
      {showInfo &&
        (
          <div className={`fixed top-3 right-3 p-2 text-black ${error ? 'bg-red-500' : 'bg-white'} opacity-0 animate-appear`}>
            {error ? 'Please provide a valid email address.' : 'You have successfully subscribed to our newsletter. Please check for a confirmation email. Make sure it is not in your spam box.'}
          </div>
        )
      }
    </form >
  )
}
