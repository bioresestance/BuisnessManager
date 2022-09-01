import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, useField, Field } from "formik";
import { FormInput } from "../components/forminputs";
import * as Yup from "yup";

export default function Settings() {
  const [settings, setSettings] = useState({ data: "" });

  // Grab the settings from the backend
  useEffect(() => {
    axios("http://localhost:5000/api/v1/settings").then((res) => {
      setSettings(res);
    });
  }, []);

  // Loop over the settings object to create a form for each settings group.
  const settingsForm = Object.keys(settings.data).map((item, index) => {
    const settingGroup = settings.data[item];

    // Returns a list of inputs representing all the setting for this group.
    const [settingItems, initialValues] = Object.keys(settingGroup).reduce(
      ([a, b], value, index) => {
        b[value] = settingGroup[value];
        a.push(<FormInput key={index} name={value} label={value} />);
        return [a, b];
      },
      [[], {}]
    );

    // Format the form.
    return (
      <Formik
        key={index}
        initialValues={{ ...initialValues }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/api/v1/settings" + `/${item}`, values)
            .then((resp) => console.log(resp));
        }}
      >
        <Form className="border-2 flex flex-col rounded-md">
          <h1 className="text-center font-bold text-4xl mb-8 mt-3 ">{item}</h1>
          {settingItems}
          <button type="submit" className="btn m-3">
            Save {item} Settings
          </button>
        </Form>
      </Formik>
    );
  });

  return (
    <div
      id="mainSection"
      className="border-top p-5 grid lg:grid-cols-3 grid-cols-1 gap-4"
    >
      {settingsForm}
    </div>
  );
}
