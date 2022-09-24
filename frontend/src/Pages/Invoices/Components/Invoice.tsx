import API from "Common/API/Index";
import { useDeleteInvoices } from "Common/Hooks";
import iInvoice from "Common/Interfaces/iInvoice";
import { FaDownload } from "react-icons/fa";

export default function Invoice(props: { data: iInvoice }) {
  const deleteInvoices = useDeleteInvoices();

  return (
    <div className="border m-3 p-2 flex flex-col gap-3">
      <h1 className="text-3xl place-self-center">Invoice {props.data?.id}</h1>
      Company: {props.data.client?.client_name}
      <a
        className="btn"
        href={`${API.baseUrl}/invoice/${props.data?.id}`}
        download
      >
        Download{"  "}
        <span className="pl-2">
          <FaDownload />
        </span>
      </a>
      <button
        className="btn"
        onClick={() => deleteInvoices.mutate(props.data?.id as number)}
      >
        Delete <span className="pl-2"></span>
      </button>
    </div>
  );
}
