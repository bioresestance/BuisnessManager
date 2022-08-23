import ClientForm from "../components/forms/clientForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Invoice() {
  return (
    <div>
      <h1>hello</h1>
      <Routes>
        <Route path="new_client" element={<ClientForm />}></Route>;
      </Routes>
    </div>
  );
}
