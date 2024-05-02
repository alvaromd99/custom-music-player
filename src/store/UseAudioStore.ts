import { create } from "zustand"

interface AudioStore {
  currentSong: HTMLAudioElement | null,
  isPlaying: boolean,
  play: (audioReference: HTMLAudioElement) => void,
  pause: () => void,
}

const useAudioStore = create<AudioStore>((set) => ({
  currentSong: null,
  isPlaying: false,
  play: (audioReference) => {
    set(state => {
      state.currentSong?.pause()
      audioReference.play()
      return { currentSong: audioReference, isPlaying: true }
    });
  },
  pause: () => {
    set(state => {
      state.currentSong?.pause()
      return { isPlaying: false }
    });
  },
}))

export default useAudioStore
