import ClientForm from "../components/clientForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Invoice() {
  return (
    <>
      <Routes location="/invoices">
        <Route path="/" element={<InvoiceFrame />}></Route>;
      </Routes>

      <div class="tabs">
        <Link to="/invoices/">Tab 1</Link>
        <a class="tab tab-active">Tab 2</a>
        <a class="tab">Tab 3</a>
      </div>

      <h1>hello</h1>
      <Outlet />
    </>
  );
}

function InvoiceFrame() {
  <>
    <h1> Invoices</h1>
    <ClientForm />
  </>;
}
