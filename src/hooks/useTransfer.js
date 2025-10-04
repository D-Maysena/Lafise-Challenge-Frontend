"use client";

import { useState, useEffect } from "react";
import { useAlerts } from "@/hooks/useAlerts";
import { useAccountStore } from "@/store/useAccountsStore";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import { createTransaction } from "@/services/useTransactions";

export function useTransfer() {
  const { accounts, decreaseBalance, increaseBalance } = useAccountStore();
  const { addTransaction, transactions } = useTransactionsStore();
  const { alertSuccess, alertError, alertWarning } = useAlerts();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    cuentaOrigen: "",
    cuentaDestino: "",
    moneda: "",
    monto: "",
    referencia: "",
    confirmacion: "",
  });

  const steps = [
    { id: 1, label: "Cuenta origen" },
    { id: 2, label: "Cuenta destino" },
    { id: 3, label: "Moneda" },
    { id: 4, label: "Datos adicionales" },
  ];

  const nextStep = () => step < steps.length && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.cuentaOrigen ||
      !form.cuentaDestino ||
      !form.moneda ||
      !form.monto
    ) {
      alertWarning(
        "Campos incompletos",
        "Por favor, completa todos los campos obligatorios."
      );
      return;
    }

    const origenSeleccionado = accounts.find(
      (ac) => ac.account_id === form.cuentaOrigen
    );
    const saldoDisponible = origenSeleccionado ? origenSeleccionado.balance : 0;

    if (Number(form.monto) > saldoDisponible) {
      alertError(
        "Saldo insuficiente",
        "La cuenta origen no tiene fondos suficientes."
      );
      return;
    }

    try {
      const result = await createTransaction({
        origin: form.cuentaOrigen,
        destination: form.cuentaDestino,
        amount: Number(form.monto),
        currency: form.moneda,
      });

      addTransaction(result);
      decreaseBalance(form.cuentaOrigen, Number(form.monto));
      increaseBalance(form.cuentaDestino, Number(form.monto));

      alertSuccess(
        "Transferencia realizada",
        `Se enviaron ${form.monto} ${form.moneda} a la cuenta destino.`
      );

      setForm({
        cuentaOrigen: "",
        cuentaDestino: "",
        moneda: "",
        monto: "",
        referencia: "",
        confirmacion: "",
      });
      setStep(1);
    } catch (error) {
      alertError(
        "Error en la transferencia",
        error.message || "Ocurrió un error"
      );
    }
  };


  return {
    step,
    steps,
    form,
    accounts,
    nextStep,
    prevStep,
    handleChange,
    handleSubmit,
  };
}
