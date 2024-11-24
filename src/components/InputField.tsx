import React from "react";
import { FieldError } from "react-hook-form";

type InputFaildProps = {
  lable: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  lable,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFaildProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor="" className=" text-xs  text-gray-500">
        {lable}
      </label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full text-black"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-red-600 text-xs">{error?.message?.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
