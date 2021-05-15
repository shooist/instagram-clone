import { FC, forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type InputType = "text" | "password" | "number" | "tel" | "email";

type Props = UseFormRegisterReturn & {
  label?: string;
  error?: string;
  placeholder?: string;
  type?: InputType;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="w-full mb-3">
      <input
        type={props.type ?? "text"}
        ref={ref}
        placeholder={props.placeholder}
        className="border border-gray-200 w-full px-3 py-2 mb-1"
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error ? (
        <p className="text-red-600 text-sm text-left">{props.error}</p>
      ) : null}
    </div>
  );
});
