import { useEffect, useState } from "react";
import axios from "axios";
import Client from "../client";

export default function ClientForm() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/invoice/clients").then((resp) => {
      setClients(() => {
        return resp.data.map((value, index) => {
          return <Client {...value} />;
        });
      });
    });
  }, []);

  return <div className="grid grid-cols-3 gap-4">{clients}</div>;
}
