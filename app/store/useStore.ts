import { create } from 'zustand';

interface Track {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

interface AppState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
}

export const useStore = create<AppState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  setCurrentTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume: volume }),
}));