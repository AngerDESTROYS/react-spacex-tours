import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface Rocket {
  id: string;
  title: string;
  description: string;
  image: any;
}

export const favoritesState = atom<Rocket[]>({
  key: "favoritesState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
