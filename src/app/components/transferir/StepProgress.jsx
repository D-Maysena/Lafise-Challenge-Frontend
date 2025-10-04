"use client";

const StepProgress = ({ steps, step }) => {
  return (
    <div className="relative flex justify-between items-center mb-10 w-full max-w-[800px] mx-auto m-5">
      {steps.map((s, index) => (
        <div key={s.id} className="flex-1 flex flex-col items-center relative">
          {index !== steps.length - 1 && (
            <div className="absolute top-4 left-1/1 w-full h-1 -translate-x-1/2 bg-gray-300">
              <div
                className="h-1 bg-[#3B8668] transition-all duration-500 ease-in-out"
                style={{ width: step > index ? "100%" : "0%" }}
              />
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
  );
};

export default StepProgress;
