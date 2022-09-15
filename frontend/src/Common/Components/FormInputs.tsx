import { Formik, Form, useField, Field, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

export const FormInputSelect = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="grow grid lg:grid-cols-3 grid-cols-1 px-4 mb-4 w-full">
      <label className="font-bold pr-3 lg:place-self-end place-self-center ">
        {props.label}
      </label>
      <select
        autoComplete="off"
        {...field}
        {...props}
        className={`border rounded-md ${
          meta.touched && meta.error ? "border-red-700 border-2" : ""
        }`}
      >
        {props.options.map((value, index) => (
          <option key={index} value={value.id} selected={index == 0}>
            {value.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-700 font-bold pl-3 lg:place-self-start place-self-center">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const FormInputDate = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <div className="grow grid lg:grid-cols-3 grid-cols-1 px-4 mb-4 w-full">
      <label className="font-bold pr-3 lg:place-self-end place-self-center ">
        {props?.label}
      </label>
      <DatePicker
        {...field}
        {...props}
        dateFormat="yyyy/MM/dd"
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
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

    case "select":
      input = <FormInputSelect {...props} />;

    default:
      // Type not specified, return text input.
      input = <FormInputText {...props} />;
  }

  return input;
};
