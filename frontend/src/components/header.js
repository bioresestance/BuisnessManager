export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-dark"
          onClick={props.updateSidebarState}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="navbar-brand">Home</span>
      </div>
    </nav>
  );
}
