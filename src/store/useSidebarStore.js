"use-client";

import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  activeOption: "tablero",
  setActiveOption: (option) => set({ activeOption: option }),
}));
