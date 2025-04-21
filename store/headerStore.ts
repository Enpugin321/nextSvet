import { create } from 'zustand';

interface State {
  headerState: boolean;
  setHeaderState: (headerState: boolean) => void;
}

export const useHeaderStore = create<State>((set) => ({
  headerState: true,
  setHeaderState: (headerState: boolean) => set({ headerState }),
}));
