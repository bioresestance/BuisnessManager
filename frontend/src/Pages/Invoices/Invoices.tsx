import ClientForm from "./Components/ClientForm";
import ClientList from "./Components/ClientList";
import { Route, Routes } from "react-router-dom";
import InvoiceForm from "./Components/InvoiceForm";
import InvoiceList from "./Components/InvoiceList";

export default function Invoice() {
  return (
    <Routes>
      <Route path="" element={<InvoiceList />}></Route>;
      <Route path="new_invoice" element={<InvoiceForm />}></Route>;
      <Route path="new_client" element={<ClientForm />}></Route>;
      <Route path="clients" element={<ClientList />}></Route>;
    </Routes>
  );
}
