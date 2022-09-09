import { useState, useEffect } from "react";
import { useGetSettings } from "Common/Hooks";
import { ISettingsGroup } from "Common/Interfaces/iSettings";
import SettingsGroupForm from "./Components/SettingsGroupForm";

export default function Settings() {
  const [settings, setSettings] = useState<ISettingsGroup[]>([]);

  const { isLoading, refetch } = useGetSettings({
    refetchOnMount: true,
    onSuccess: (res: ISettingsGroup[]) => {
      setSettings(res);
    },
  });
  // Loop over the settings object to create a form for each settings group.
  let settingsForm = settings.map<JSX.Element>((item, index) => {
    return (
      <SettingsGroupForm
        key={index}
        groupName={item.name}
        items={item.items}
      ></SettingsGroupForm>
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
