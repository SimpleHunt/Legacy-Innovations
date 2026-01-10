import { FieldError } from "react-hook-form";

type TextAreaFieldProps = {
  label: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const TextAreaField = ({
  label,
  register,
  name,
  defaultValue,
  error,
  textareaProps,
}: TextAreaFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label} { <span className="text-red-500"> *</span>}</label>

      <textarea
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        defaultValue={defaultValue}
        {...textareaProps}
        rows={4}
      />

      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default TextAreaField;
