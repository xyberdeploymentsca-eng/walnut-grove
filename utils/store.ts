/** @format */

import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSehUwbaqcTlwSin_brRmliAyTd3o4EvM7lk6baeJgzMfcszzw/viewform?usp=publish-editor",
        "_blank"
      );
    }
  },
  closeModal: () => set({ isOpen: false }),
}));
