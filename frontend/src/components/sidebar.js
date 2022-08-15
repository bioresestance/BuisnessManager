import "../styles/sidebar.css";

export default function SideBar() {
  return (
    <div
      className="h-100 d-flex flex-column align-content-between border-end rounded-end bg-secondary"
      id="sidebar"
    >
      <nav className="mb-auto mx-3">
        <div className="text-center pb-3 border-bottom border-dark">
          <h3>Home Lab Supervisor</h3>
        </div>
        <div className="list-group h5 navbar-nav my-5  gap-3 text-center mx-2">
          <a href="/" className="list-group-item btn text-dark ">
            Home
          </a>
          <a href="/settings" className=" list-group-item btn text-dark">
            Settings
          </a>
          <a href="/invoices" className=" list-group-item btn text-dark">
            Invoices
          </a>
          <a href="#" className=" list-group-item btn text-dark">
            Contact
          </a>
        </div>
      </nav>

      <div className="py-4 border-top border-dark text-center">
        <span className="">footer text here</span>
      </div>
    </div>
  );
}
