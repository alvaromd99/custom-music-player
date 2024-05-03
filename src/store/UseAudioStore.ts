import { create } from 'zustand'

interface AudioStore {
  currentSong: HTMLAudioElement | null
  isPlaying: boolean
  firstSong: HTMLAudioElement | null
  play: (audioReference: HTMLAudioElement) => void
  pause: () => void
  setFirstSong: (audioElement: HTMLAudioElement) => void
}

const useAudioStore = create<AudioStore>((set) => ({
  currentSong: null,
  isPlaying: false,
  firstSong: null,
  play: (audioReference) => {
    set((state) => {
      state.currentSong?.pause()
      audioReference.play()
      return { currentSong: audioReference, isPlaying: true }
    })
  },
  pause: () => {
    set((state) => {
      state.currentSong?.pause()
      return { isPlaying: false }
    })
  },
  setFirstSong: (audioElement) => set({ firstSong: audioElement })
}))

export default useAudioStore
