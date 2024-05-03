import React from "react";
import { Controller, FieldValues, UseFormReturn, Path } from "react-hook-form";

type TOption = { value: string; label: string };

type TSelectField<T extends FieldValues> = {
 form: UseFormReturn<T>;
 name: Path<T>; // Asegura que name es una clave válida de T
 options: TOption[];
 label?: string;
 disabled?: boolean;
};

const SelectField = <T extends FieldValues>(props: TSelectField<T>) => {
 return (
  <div>
   {props.label && <label htmlFor={props.name}>{props.label}</label>}
   <Controller
    name={props.name}
    control={props.form.control}
    render={({ field }) => (
     <select
      {...field}
      id={props.name}
      disabled={props.disabled}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
     >
      <option value=''>--- Selecciona una opción ---</option>
      {props.options.map((option) => (
       <option key={option.value} value={option.value}>
        {option.label}
       </option>
      ))}
     </select>
    )}
   />
  </div>
 );
};

export default SelectField;
