import React from "react";

const SelectInput = ({onChange, nameInput, name, name1, name2, name3, className, value1,value2, value3, genero}) => {
  return (
    <>
      <select className={`outline-none focus:ring transition-all rounded-md bg-zinc-200 shadow-lg shadow-zinc-700/25 m-2 ${className}`} name={name} onChange={onChange}>
        <option disabled selected defaultValue="">
          {nameInput}
        </option>
        <option value={value1} onChange={onChange}>{name1}</option>
        <option value={value2} onChange={onChange}>{name2}</option>
        <option value={value3} onChange={onChange}>{name3}</option>
      </select>
    </>
  );
};

export default SelectInput;
