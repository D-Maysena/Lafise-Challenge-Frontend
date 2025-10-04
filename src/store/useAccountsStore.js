import { fetchAccountsById } from "@/services/accountService";
import { create } from "zustand";

const LOCAL_STORAGE_KEY = "accounts";

export const useAccountStore = create((set, get) => ({
  accounts: [],
  loading: false,
  error: null,

  loadAccountsFromStorage: () => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      if (stored.length > 0) {
        set({ accounts: stored });
      }
    }
  },

  fetchAccountsByIds: async (accounts_numbers = []) => {
    set({ loading: true, error: null });
    try {
      const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      if (stored.length > 0) {
        set({ accounts: stored, loading: false });
        return;
      }

      const responses = await Promise.all(
        accounts_numbers.map((num) => fetchAccountsById(num))
      );

      const accountsWithArray = responses.map((account, index) => ({
        ...account,
        account_id: accounts_numbers[index],
      }));

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(accountsWithArray)
      );

      set({ accounts: accountsWithArray, loading: false });
    } catch (error) {
      set({ error: error.message || "Error desconocido", loading: false });
    }
  },

  decreaseBalance: (account_id, amount) => {
    const updated = get().accounts.map((ac) =>
      ac.account_id === account_id
        ? { ...ac, balance: ac.balance - amount }
        : ac
    );
    set({ accounts: updated });
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }
  },

  increaseBalance: (account_id, amount) => {
    const updated = get().accounts.map((ac) =>
      ac.account_id === account_id
        ? { ...ac, balance: ac.balance + amount }
        : ac
    );
    set({ accounts: updated });
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }
  },
}));
