import { useState, useEffect } from "react";
import axios from "axios";

export default function Settings() {
  const [settings, setSettings] = useState({ data: "" });

  // Grab the settings from the backend
  useEffect(() => {
    axios("http://localhost:5000/api/settings").then((res) => {
      setSettings(res);
    });
  }, []);

  // Loop over the settings object to create a form for each settings group.
  const settingsForm = Object.keys(settings.data).map((item, index) => {
    const settingGroup = settings.data[item];

    // Returns a list of inputs representing all the setting for this group.
    const settingItems = Object.keys(settingGroup).map((value, index) => {
      const settingItem = settingGroup[value];
      return (
        <div className="p-3 grow">
          <label className="font-bold mb-3">{value}</label>
          <br />
          <input
            key={index}
            type="text"
            value={settingItem}
            className="border mt-3 px-2 rounded-md"
          />
        </div>
      );
    });

    // Format the
    return (
      <form key={index} className="border-2 gap-3 flex flex-col rounded-md">
        <h1 className="text-center font-bold text-4xl mb-8 mt-3 ">{item}</h1>

        {settingItems}
        <button className="rounded bg-slate-100 inline-block w-[25%] place-self-center m-6">
          Save {item} Settings
        </button>
      </form>
    );
  });

  return (
    <div id="mainSection" className="border-top p-5 grid grid-cols-3 gap-4">
      {settingsForm}
    </div>
  );
}
