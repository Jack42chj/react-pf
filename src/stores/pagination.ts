import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface PaginationState {
  isOpen: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationState>()(
  immer((set) => ({
    isOpen: false,
    currentPage: 0,
    setCurrentPage: (page: number) =>
      set((state) => ({ ...state, currentPage: page })),
  })),
);

export { usePaginationStore };
