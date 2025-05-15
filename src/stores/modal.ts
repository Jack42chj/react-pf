import type { ReactNode } from "react";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ModalState {
  modals: ReactNode[];
  addModal: (modal: ReactNode) => void;
  removeModal: () => void;
}

const useModalStore = create<ModalState>()(
  immer((set) => ({
    modals: [],
    addModal: (modal) =>
      set((state) => {
        state.modals.push(modal);
      }),
    removeModal: () =>
      set((state) => {
        state.modals.pop();
      }),
  })),
);

export { useModalStore };
