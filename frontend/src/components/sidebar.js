export default function SideBar() {
  return (
    <div className="container h-100">
      <nav className="row h-75">
        <div className="p-3 ">
          <h2>Home Lab Supervisor</h2>
        </div>
        <ul className="list-unstyled h5 navbar-nav">
          <li className="my-3 navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="my-3 navbar-item">
            <a href="/settings">Settings</a>
          </li>
          <li className="my-3 navbar-item">
            <a href="/invoices">Invoices</a>
          </li>
          <li className="my-3 navbar-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="row h-25 ">
        <span className="align-bottom">footer text here</span>
      </div>
    </div>
  );
}
