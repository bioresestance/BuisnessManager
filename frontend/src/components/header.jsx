import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  return (
    <nav className="flex h-12 bg-slate-200 ">
      <div className="flex grow ">
        <button
          type="button"
          id="sidebarCollapse"
          className="rounded bg-slate-100  place-self-center p-2 m-2"
          onClick={props.updateSidebarState}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="rounded bg-slate-100  place-self-center w-full"
          />
        </button>
      </div>
      <div className="flex align-middle p-0 m-0">
        <span className="px-5 text-center text-2xl">Home</span>
      </div>
    </nav>
  );
}
