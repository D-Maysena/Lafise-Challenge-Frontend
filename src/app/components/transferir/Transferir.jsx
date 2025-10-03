"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";

const Transferir = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { id: 1, label: "Cuenta origen" },
    { id: 2, label: "Cuenta destino" },
    { id: 3, label: "Monto" },
    { id: 4, label: "Datos adicionales" },
  ];

  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Transferir</h2>

      <div className="border border-gray-200 w-[1000px] h-[500px] mt-4 ">
        <div className="relative flex justify-between items-center mb-10 w-full max-w-[800px] mx-auto m-5">
          {steps.map((s, index) => (
            <div
              key={s.id}
              className="flex-1 flex flex-col items-center relative"
            >
              {index !== steps.length - 1 && (
                <div className="absolute top-4 left-1/1 w-full h-1 -translate-x-1/2 bg-gray-300">
                  <div
                    className="h-1 bg-[#3B8668] transition-all duration-500 ease-in-out"
                    style={{
                      width: step > index ? "100%" : "0%",
                    }}
                  ></div>
                </div>
              )}

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white z-10 transition-colors duration-500 ${
                  step > index ? "bg-[#3B8668]" : "bg-gray-300 text-gray-600"
                }`}
              >
                {step > index ? "✓" : s.id}
              </div>

              <span className="text-xs mt-1 text-gray-600">Paso {s.id}</span>

              <span className="text-sm font-semibold mt-1 text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 mt-5" />
        <div className="flex justify-center gap-x-1 p-5 bg-[#F9FAF9] ">
          <div className="flex flex-col w-1/2 gap-1">
            <span className="font-medium">Tipo de transacción</span>
            <select className="w-100 border border-gray-200 rounded p-2">
              <option value="">Seleccione</option>
              <option value="terceros">Terceros</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-medium">Cuenta</span>
            <select className="w-100 border border-gray-200 rounded p-2">
              <option value="">Seleccione</option>
              <option value="terceros">Terceros</option>
            </select>
          </div>
        </div>
        <hr className="border-gray-300 mt-5" />
        <div className="flex gap-[30px] p-8 ml-8 mr-5">
          <TextField
            id="outlined-basic"
            label="Cuenta de débito"
            variant="outlined"
            size="small"
            sx={{
              width: "80%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#DFE1DF",
                },
                "&:hover fieldset": {
                  borderColor: "#2d6650",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3B8668",
                },
              },
              "& .MuiInputLabel-root": {
                borderColor: "#2d6650",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3B8668",
              },
            }}
          />{" "}
          <TextField
            id="outlined-basic"
            label="Cuenta de débito"
            variant="outlined"
            size="small"
            sx={{
              width: "80%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#DFE1DF",
                },
                "&:hover fieldset": {
                  borderColor: "#2d6650",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3B8668",
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3B8668",
              },
            }}
          />
        </div>
        <div className="flex gap-[30px] p-8 ml-8 mr-5">
          <TextField
            id="outlined-basic"
            label="Referencia"
            variant="outlined"
            size="small"
            sx={{
              width: "80%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#DFE1DF",
                },
                "&:hover fieldset": {
                  borderColor: "#2d6650",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3B8668",
                },
              },
              "& .MuiInputLabel-root": {
                borderColor: "#2d6650",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3B8668",
              },
            }}
          />{" "}
          <TextField
            id="outlined-basic"
            label="Enviar confirmación a"
            variant="outlined"
            size="small"
            sx={{
              width: "80%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#DFE1DF",
                },
                "&:hover fieldset": {
                  borderColor: "#2d6650",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3B8668",
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3B8668",
              },
            }}
          />
        </div>

        <div className="flex justify-center gap-4 mt-[100px]">
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-white rounded border border-[#00593B] text-[#00593B] 
               hover:bg-[#00593B] hover:text-white transition-colors duration-300"
          >
            Anterior
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-[#00593B] text-white rounded 
               hover:bg-white hover:text-[#00593B] hover:border-[#00593B] 
               border border-[#00593B] transition-colors duration-300"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transferir;
