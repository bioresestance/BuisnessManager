import { Form, Formik } from "formik";
import { ISettingsGroup, SettingsGroupItem } from "Common/Interfaces/iSettings";
import { useUpdateSettingsByGroup } from "Common/Hooks";
import { FormInput } from "Common/Components/FormInputs";

const SettingsGroupForm = (props: {
  groupName: string;
  items: SettingsGroupItem[];
}) => {
  const mutateSettings = useUpdateSettingsByGroup();

  // Builds an object containing all initial values.
  const initialValues = props.items.reduce((previousValue, value) => {
    previousValue = {...previousValue, [value.key]: value.value};
    return previousValue;
  }, {});

  // Builds a list of form inputs for the current settings group
  const settingItems = props.items.map<JSX.Element>((value, index) => {
    return <FormInput key={index} name={value.key} label={value.common_name} />;
  });

  // Format the form.
  return (
    <Formik
      key={props.groupName}
      initialValues={{ ...initialValues }}
      onSubmit={(values) => {
        // mutateSettings.mutate({ groupName: item, settingsData: values });
      }}
    >
      <Form className="border-2 flex flex-col rounded-md">
        <h1 className="text-center font-bold text-4xl mb-8 mt-3 ">{props.groupName}</h1>
        {settingItems}
        <button type="submit" className="btn m-3">
          Update {props.groupName}
        </button>
      </Form>
    </Formik>
  );
};

export default SettingsGroupForm;
