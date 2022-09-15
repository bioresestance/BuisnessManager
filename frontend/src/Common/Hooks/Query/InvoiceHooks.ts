import { useQuery, useMutation } from "react-query";
import API from "Common/API/Index";

export function useGetInvoices(options?: any) {
  const queryResult = useQuery(
    ["invoices-get", `all`],
    async () => await API.invoices.get(),
    options
  );
  return queryResult;
}

export function useDeleteInvoices(options?: any) {
  const mutateResults = useMutation(
    async (id: number) => await API.invoices.delete(id),
    options
  );
  return mutateResults;
}

export function useCreateInvoices(options?: any) {
  const mutateResults = useMutation(
    async (invoiceData: object) => await API.invoices.create(invoiceData),
    options
  );
  return mutateResults;
}
