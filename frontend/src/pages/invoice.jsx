import NewClientForm from "../components/forms/newClientForm";
import ClientForm from "../components/forms/clientForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Invoice() {
  return (
    <Routes>
      <Route path="" element={<NewClientForm />}></Route>;
      <Route path="new_client" element={<NewClientForm />}></Route>;
      <Route path="clients" element={<ClientForm />}></Route>;
    </Routes>
  );
}
