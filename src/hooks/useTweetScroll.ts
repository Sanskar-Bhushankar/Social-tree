import { create } from 'zustand';

type ScrollSpeed = 'slow' | 'normal';

interface TweetScrollStore {
  speed: ScrollSpeed;
  setScrollSpeed: (speed: ScrollSpeed) => void;
}

export const useTweetScroll = create<TweetScrollStore>((set) => ({
  speed: 'normal',
  setScrollSpeed: (speed) => set({ speed }),
}));