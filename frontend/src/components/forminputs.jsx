import { Formik, Form, useField, Field } from "formik";

export const FormInputText = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="grow grid lg:grid-cols-3 grid-cols-1 px-4 mb-4 w-full">
      <label className="font-bold pr-3 lg:place-self-end place-self-center ">
        {props.label}
      </label>
      <input
        autoComplete="off"
        type="text"
        {...field}
        {...props}
        className={`border rounded-md ${
          meta.touched && meta.error ? "border-red-700 border-2" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-700 font-bold pl-3 lg:place-self-start place-self-center">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const FormInput = (props) => {
  let input;

  switch (props.type) {
    case "text":
      input = <FormInputText {...props} />;

    default:
      // Type not specified, return text input.
      input = <FormInputText {...props} />;
  }

  return input;
};
