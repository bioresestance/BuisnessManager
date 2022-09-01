import { useEffect, useState } from "react";
import axios from "axios";
import Client from "../client";

export default function ClientForm() {
  const [clients, setClients] = useState([]);

  function getClients() {
    axios.get("http://localhost:5000/api/v1/invoice/clients").then((resp) => {
      setClients(() => {
        return resp.data.map((value, index) => {
          return (
            <Client key={index} {...value} deleteFunction={deleteClient} />
          );
        });
      });
    });
  }

  function deleteClient(client_id) {
    axios
      .delete(`http://localhost:5000/api/v1/invoice/clients/${client_id}`)
      .then((resp) => getClients());
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {clients}
    </div>
  );
}
