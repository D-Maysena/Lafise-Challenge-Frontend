"use client";

import Swal from "sweetalert2";

export function useAlerts() {
  const alertSuccess = (title, text = "") => {
    Swal.fire({
      icon: "success",
      title,
      text,
      confirmButtonColor: "#00593B",
    });
  };

  const alertError = (title, text = "") => {
    Swal.fire({
      icon: "error",
      title,
      text,
      confirmButtonColor: "#00593B",
    });
  };

  const alertWarning = (title, text = "") => {
    Swal.fire({
      icon: "warning",
      title,
      text,
      confirmButtonColor: "#00593B",
    });
  };

  const alertConfirm = async (title, text = "") => {
    const result = await Swal.fire({
      icon: "question",
      title,
      text,
      showCancelButton: true,
      confirmButtonColor: "#00593B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    });
    return result.isConfirmed;
  };

  return {
    alertSuccess,
    alertError,
    alertWarning,
    alertConfirm,
  };
}
