"use-client";

import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  activeOption: "tablero",
  isCollapsed: true,
  setActiveOption: (option) => set({ activeOption: option }),
  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
