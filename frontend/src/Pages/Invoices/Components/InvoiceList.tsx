import axios from "axios";
import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import API from "Common/API/Index";
import { useGetInvoices } from "Common/Hooks";
import Invoice from "./Invoice";
import iInvoice from "Common/Interfaces/iInvoice";

export default function CurrentInvoices() {
  const [invoices, setInvoices] = useState<iInvoice[]>();
  const [invoiceData, setInvoiceData] = useState<string | JSX.Element[]>(
    "Loading"
  );

  const { isLoading, refetch } = useGetInvoices({
    refetchOnMount: true,
    onSuccess: (res: iInvoice[]) => {
      setInvoices(res);
    },
  });

  useEffect(() => {

    if(invoices == undefined) {
      refetch();
      return;
    }

    if (isLoading == true) {
      setInvoiceData("Loading...");
    } else {
      if (invoices?.length == 0) {
        setInvoiceData("No Invoices to Show");
      } else {
        let values = (invoices as iInvoice[]).map((value, index) => {
          return <Invoice key={index} data={value} />;
        });

        setInvoiceData(values);
      }
    }
  }, [invoices]);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
      {invoiceData}
    </div>
  );
}
