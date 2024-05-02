import { create } from "zustand"

interface AudioStore {
  currentSong: HTMLAudioElement | null,
  changeCurrentSong: (newSong: HTMLAudioElement) => void,
  isPlaying: boolean,
  changePlayingState: (newPlayState: boolean) => void,
  handlePlay: (audioReference: HTMLAudioElement) => void
}

const useAudioStore = create<AudioStore>((set, get) => ({
  currentSong: null,
  changeCurrentSong: (newSong) => set({ currentSong: newSong }),
  isPlaying: false,
  changePlayingState: (newPlayState) => set({ isPlaying: newPlayState }),
  handlePlay: (audioReference) => {
    const { currentSong, changeCurrentSong, isPlaying, changePlayingState } = get()
    if (!audioReference) return

    if (!currentSong) {
      audioReference.play()
      changePlayingState(true)
      changeCurrentSong(audioReference)
    } else if (currentSong && currentSong !== audioReference) {
      currentSong.pause()
      audioReference.play()
      changePlayingState(true)
      changeCurrentSong(audioReference)
    } else if (currentSong && currentSong === audioReference && !isPlaying) {
      audioReference.play()
      changePlayingState(true)
    } else {
      currentSong.pause()
      changePlayingState(false)
    }
  }
}))

export default useAudioStore
