"use client";

import StepProgress from "./StepProgress";
import TransferForm from "./TransferForm";
import { useTransfer } from "@/hooks/useTransfer";

const Transferir = () => {
  const {
    step,
    steps,
    form,
    accounts,
    nextStep,
    prevStep,
    handleChange,
    handleSubmit,
  } = useTransfer();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Transferir</h2>

      <div className="border border-gray-200 w-full max-w-[1000px] h-auto sm:h-[600px] mt-4 p-4 flex flex-col gap-4">
        <StepProgress steps={steps} step={step} />

        <hr className="border-gray-300 mt-5" />

        <form onSubmit={handleSubmit}>
          <TransferForm
            step={step}
            form={form}
            handleChange={handleChange}
            accounts={accounts}
          />
          <div className="flex justify-center gap-4 mt-10">
            {step > 1 && (
              <button
                onClick={prevStep}
                type="button"
                className="px-4 py-2 border border-[#00593B] text-[#00593B] rounded hover:bg-[#00593B] hover:text-white"
              >
                Anterior
              </button>
            )}
            {step < steps.length && (
              <button
                onClick={nextStep}
                type="button"
                className="px-4 py-2 bg-[#00593B] text-white rounded hover:bg-white hover:text-[#00593B] border border-[#00593B]"
              >
                Continuar
              </button>
            )}
            {step === steps.length && (
              <button
                type="submit"
                className="px-4 py-2 bg-[#00593B] text-white rounded hover:bg-green-700"
              >
                Enviar transferencia
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transferir;
