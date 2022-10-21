import { useEffect, useState } from "react";
import Client from "./Client";
import { useDeleteClients, useGetClients } from "Common/Hooks";
import { iClient } from "Common/Interfaces/iClient";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

export default function ClientList() {
  const [clients, setClients] = useState<iClient[]>();
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
  }, [clients]);

  const columns: MRT_ColumnDef<iClient>[] = [
    { accessorKey: "id", header: "#" },
    { accessorKey: "client_name", header: "Client" },
    { accessorKey: "recipient", header: "Reciptient" },
    { accessorKey: "phone", header: "Phone Number" },
  ];

  return (
    <div className="mt-10 mx-6">
      <MaterialReactTable
        columns={columns}
        data={clients ?? []} //data is undefined on first render
        enableColumnOrdering={true}
      ></MaterialReactTable>
    </div>
  );
}
