import { useQuery, useMutation } from "react-query";
import API from "Common/API/Index";

export function useGetClients(isSimple?: boolean, options?: any) {
  const queryResult = useQuery(
    ["clients-get", `all${isSimple ? "-simple" : ""}`],
    async () => await API.clients.get(isSimple),
    options
  );
  return queryResult;
}

export function useDeleteClients(options?: any) {
  const mutateResults = useMutation(
    async (id: number) => await API.clients.delete(id),
    options
  );
  return mutateResults;
}

export function useCreateClients(options?: any) {
  const mutateResults = useMutation(
    async (clientData: object) => await API.clients.create(clientData),
    options
  );
  return mutateResults;
}
