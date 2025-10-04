import { fetchUserById } from "@/services/userService";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async (userId) => {
    set({ loading: true, error: null });

    try {
      const data =  await fetchUserById(userId);
      set({ user: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
