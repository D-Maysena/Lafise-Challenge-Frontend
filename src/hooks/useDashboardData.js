"use client";

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useAccountStore } from "@/store/useAccountsStore";
import { useTransactionsStore } from "@/store/useTransactionsStore";

export function useDashboardData() {
  const { user, fetchUser } = useUserStore();
  const { fetchAccountsByIds, accounts } = useAccountStore();
  const { fetchTransactionsByAccount, transactions } = useTransactionsStore();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    fetchUser(1);
  }, [fetchUser]);

  useEffect(() => {
    if (user?.products) {
      const accountsIds = user.products.map((p) => p.id);
      fetchAccountsByIds(accountsIds);
    }
  }, [user, fetchAccountsByIds]);

  useEffect(() => {
    if (accounts?.length > 0) {
      const accountsNumbers = accounts.map((a) => a.account_number);
      fetchTransactionsByAccount(accountsNumbers);
    }
  }, [accounts, fetchTransactionsByAccount]);

  return {
    user,
    accounts,
    transactions,
    isClient,
  };
}
