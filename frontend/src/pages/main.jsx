import { useState, useEffect } from "react";
import axios from "axios";

export default function MainSection() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios("http://localhost:3000/api/settings")
      .then((res) => res.json())
      .then((res) => {
        setSettings(res);
      });

    console.log(settings);
  }, []);

  return (
    <div id="mainSection" className="border-top p-5">
      <h1>Hello world from the main component</h1>
      {/* <p>{settings}</p> */}
    </div>
  );
}
