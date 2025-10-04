"use client";

import TextField from "@mui/material/TextField";
import FormField from "./FormField";

const TransferForm = ({ step, form, handleChange, accounts }) => {
  const handleCuentaChange = (e) => {
    const { name, value } = e.target;

    handleChange(e);

    if (name === "cuentaOrigen" && value === form.cuentaDestino) {
      handleChange({
        target: { name: "cuentaDestino", value: form.cuentaOrigen },
      });
    }

    if (name === "cuentaDestino" && value === form.cuentaOrigen) {
      handleChange({
        target: { name: "cuentaOrigen", value: form.cuentaDestino },
      });
    }

    const selectedAccount = accounts.find((ac) => ac.account_id === value);
    if (selectedAccount) {
      handleChange({
        target: { name: "moneda", value: selectedAccount.currency },
      });
    }
  };

  const origenCuenta = accounts.find(
    (ac) => ac.account_id === form.cuentaOrigen
  );
  const destinoCuenta = accounts.find(
    (ac) => ac.account_id === form.cuentaDestino
  );

  return (
    <div className="flex flex-col justify-center gap-5 p-5 bg-[#F9FAF9]">
      <div className="flex flex-col sm:flex-row gap-5 w-full">
        {step > 0 && (
          <FormField label="Cuenta origen">
            <select
              className="w-full border border-gray-200 rounded p-2"
              name="cuentaOrigen"
              value={form.cuentaOrigen}
              onChange={handleCuentaChange}
            >
              <option value="">Seleccione</option>
              {accounts.map((ac) => (
                <option key={ac.account_id} value={ac.account_id}>
                  {ac.account_id}
                </option>
              ))}
            </select>
            {origenCuenta && (
              <div className="mt-1 text-sm flex justify-around">
                <span className="text-[#00593B] font-semibold">
                  {origenCuenta.currency}
                </span>
                <span className="text-green-800">C${origenCuenta.balance}</span>
              </div>
            )}
          </FormField>
        )}

        {step >= 2 && (
          <FormField label="Cuenta destino">
            <select
              className="w-full border border-gray-200 rounded p-2"
              name="cuentaDestino"
              value={form.cuentaDestino}
              onChange={handleCuentaChange}
            >
              <option value="">Seleccione</option>
              {accounts.map((ac) => (
                <option key={ac.account_id} value={ac.account_id}>
                  {ac.account_id}
                </option>
              ))}
            </select>
            {destinoCuenta && (
              <div className="mt-1 text-sm flex justify-between">
                <span className="text-[#00593B]  font-semibold">
                  {destinoCuenta.currency}
                </span>
              
                <span className="text-green-800">
                  C${destinoCuenta.balance}
                </span>
              </div>
            )}
          </FormField>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full">
        {step >= 3 && (
          <FormField label="Moneda">
            <select
              className="w-full border border-gray-200 rounded p-2"
              name="moneda"
              disabled
              value={form.moneda}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="NIO">Córdobas</option>
              <option value="USD">USD</option>
            </select>
          </FormField>
        )}
        {step >= 4 && (
          <FormField label="Monto">
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded"
              name="monto"
              value={form.monto}
              onChange={handleChange}
            />
          </FormField>
        )}
      </div>

      {step >= 4 && (
        <div className="flex flex-col sm:flex-row gap-5 mt-3 w-full">
          <TextField
            label="Referencia"
            name="referencia"
            value={form.referencia}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ width: "100%", sm: "50%" }}
          />
          <TextField
            label="Enviar confirmación a"
            name="confirmacion"
            value={form.confirmacion}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ width: "100%", sm: "50%" }}
          />
        </div>
      )}
    </div>
  );
};

export default TransferForm;
