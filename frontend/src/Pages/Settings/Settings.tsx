import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { FormInput } from "Common/Components/FormInputs";
import { useGetSettings, useUpdateSettingsByGroup } from "Common/Hooks";

export default function Settings() {
  const [settings, setSettings] = useState({ data: "" });

  const { isLoading, refetch } = useGetSettings({
    onSuccess: (res: any) => {
      setSettings(res);
    },
  });
  const mutateSettings = useUpdateSettingsByGroup();

  // Loop over the settings object to create a form for each settings group.
  const settingsForm = Object.keys(settings).map((item, index) => {
    const settingGroup = settings[item];
    console.log(settingGroup);

    // Returns a list of inputs representing all the setting for this group.
    const [settingItems, initialValues] = Object.keys(settingGroup).reduce(
      ([a, b], value: string, index: number) => {
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
          mutateSettings.mutate({ groupName: item, settingsData: values });
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

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div
      id="mainSection"
      className="border-top p-5 grid lg:grid-cols-3 grid-cols-1 gap-4"
    >
      {isLoading ? "Loading..." : settingsForm}
    </div>
  );
}
