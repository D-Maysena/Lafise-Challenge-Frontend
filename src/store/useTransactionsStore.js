import { create } from "zustand";
import { fetchTransactions } from "@/services/useTransactions";

const LOCAL_STORAGE_KEY = "transactions";

export const useTransactionsStore = create((set, get) => ({
  transactions: [],
  loading: false,
  error: null,


  fetchTransactionsByAccount: async (accounts_numbers) => {
    set({ loading: true, error: null });
    try {
      const responses = await Promise.all(
        accounts_numbers.map((account) => fetchTransactions(account))
      );
      const serverTransactions = responses.flatMap((res) => res.items);

      const localTransactions =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
          : [];

      const merged = [
        ...serverTransactions,
        ...localTransactions.filter(
          (lt) =>
            !serverTransactions.some(
              (st) => st.transaction_number === lt.transaction_number
            )
        ),
      ];

      if (typeof window !== "undefined") {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
      }

      set({ transactions: merged, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addTransaction: (transaction) => {
    const updated = [transaction, ...get().transactions];
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }
    set({ transactions: updated });
  },
}));
