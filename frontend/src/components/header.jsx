import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  return (
    <nav className="flex h-12 bg-slate-200 ">
      <div className="flex grow">
        <button
          type="button"
          id="sidebarCollapse"
          className=""
          onClick={props.updateSidebarState}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex align-middle p-0 m-0">
        <span className="px-5 text-center text-2xl">Home</span>
      </div>
    </nav>
  );
}
