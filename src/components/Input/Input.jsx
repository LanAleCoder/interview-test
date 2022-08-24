import React from "react";

export const Input = ({
  placeholder,
  type,
  onChange,
  value,
  required,
  className,
  onFocus,
  onBlur,
  name,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        className={`outline-none focus:ring transition-all rounded-md bg-zinc-200 shadow-lg shadow-zinc-700/10 ${className} m-2`}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
      />
    </>
  );
};
