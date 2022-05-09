import create from "zustand";
import { Page, PageId } from "@/types";

type AppState = {
  page: Page;
  setPage: (page: Page) => void;
  isPresenting: boolean;
  setIsPresenting: (isPresenting: boolean) => void;
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
};

export const appState = create<AppState>((set) => {
  return {
    page: {
      id: PageId.home,
    },
    setPage(page) {
      set({ page });
    },
    isPresenting: false,
    setIsPresenting(isPresenting) {
      set({ isPresenting });
    },
    hovering: false,
    setHovering(hovering) {
      set({ hovering });
    },
  };
});

export default appState;
