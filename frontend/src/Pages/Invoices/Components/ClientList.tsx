import { useEffect, useState } from "react";
import axios from "axios";
import Client from "./Client";
import { useDeleteClients, useGetClients } from "Common/Hooks";
import { iClient } from "Common/Interfaces/iClient";

export default function ClientList() {
  const [clients, setClients] = useState<iClient[]>();
  const [clientData, setClientData] = useState<JSX.Element[]>([]);
  const deleteClient = useDeleteClients();

  const { isLoading, refetch } = useGetClients(false, {
    refetchOnMount: true,
    onSuccess: (res: iClient[]) => {
      setClients(res);
    },
  });

  useEffect(() => {
    if (clients == undefined) {
      refetch();
      return;
    }

    let value = clients.map((value, index) => {
      return (
        <Client key={index} {...value} deleteFunction={deleteClient.mutate} />
      );
    });

    setClientData(value);
  }, [clients]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {clientData}
    </div>
  );
}
