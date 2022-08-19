import { Formik, Form, useField, Field } from "formik";

export const FormInputText = (props) => {
  return (
    <div className="p-3 grow">
      <label className="font-bold mb-3">{props.label}</label>
      <br />
      <Field
        name={props.name}
        type="text"
        className={
          props.className ? props.className : "border mt-3 px-2 rounded-md"
        }
      />
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
