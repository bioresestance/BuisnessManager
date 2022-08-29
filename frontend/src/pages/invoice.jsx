import NewClientForm from "../components/forms/newClientForm";
import ClientForm from "../components/forms/clientForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NewInvoiceForm from "../components/forms/newInvoiceForm";
import CurrentInvoices from "../components/currentInvoices";

export default function Invoice() {
  return (
    <Routes>
      <Route path="" element={<CurrentInvoices />}></Route>;
      <Route path="new_invoice" element={<NewInvoiceForm />}></Route>;
      <Route path="new_client" element={<NewClientForm />}></Route>;
      <Route path="clients" element={<ClientForm />}></Route>;
    </Routes>
  );
}
