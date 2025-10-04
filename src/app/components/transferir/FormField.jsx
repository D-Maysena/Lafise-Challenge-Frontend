"use client";

const FormField = ({ label, children }) => {
  return (
    <div className="flex flex-col md:w-1/2 gap-1">
      <span className="font-medium">{label}</span>
      {children}
    </div>
  );
};

export default FormField;
