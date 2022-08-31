import axios from "axios";
import { useState, useEffect } from "react";
import { faDownload, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CurrentInvoices() {
  const [invoices, setInvoices] = useState([]);

  function on_delete_click(id) {
    axios.delete(`http://localhost:5000/api/v1/invoice/${id}`);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/invoice/").then((resp) => {
      setInvoices(() => {
        return resp.data.map((value, index) => {
          return (
            <div className="border m-3 p-2 flex flex-col gap-3" key={index}>
              <h1 className="text-3xl place-self-center">Invoice {value.id}</h1>
              Company: {value?.client?.client_name}
              <a
                className="btn"
                href={`http://localhost:5000/api/v1/invoice/${value.id}`}
                download
              >
                Download{"  "}
                <span className="pl-2">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </a>
              <button className="btn" onClick={() => on_delete_click(value.id)}>
                Delete{" "}
                <span className="pl-2">
                  <FontAwesomeIcon icon={faX} />
                </span>
              </button>
            </div>
          );
        });
      });
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
      {invoices}
    </div>
  );
}
