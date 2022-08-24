import NewClientForm from "../components/forms/newClientForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Invoice() {
  return (
    <div>
      <h1>hello</h1>
      <Routes>
        <Route path="new_client" element={<NewClientForm />}></Route>;
        <Route path="clients" element={<NewClientForm />}></Route>;
      </Routes>
    </div>
  );
}
