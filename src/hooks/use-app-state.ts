import create from "zustand";
import { Page, PageId } from "@/types";

type AppState = {
  page: Page;
  setPage: (page: Page) => void;
};

export const appState = create<AppState>((set) => {
  return {
    page: {
      id: PageId.home,
    },
    setPage(page) {
      set({ page });
    },
  };
});

export default appState;
