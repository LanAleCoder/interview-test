import React from "react";

const SelectInput = ({onChange, name, className, value, genero}) => {
  return (
    <>
      <select className={`outline-none focus:ring transition-all rounded-md bg-zinc-200 shadow-lg shadow-zinc-700/25 m-2 ${className}`} name={name} onChange={onChange}>
        <option disabled selected defaultValue="">
          Selecciona tu genero
        </option>
        <option value={value} onChange={onChange}>Masculino</option>
        <option value={value} onChange={onChange}>Femenino</option>
        <option value={value} onChange={onChange}>Otro</option>
      </select>
    </>
  );
};

export default SelectInput;
