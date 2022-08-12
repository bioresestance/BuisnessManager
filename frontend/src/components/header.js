export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-dark">
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="navbar-brand">Home</span>
      </div>
    </nav>
  );
}
