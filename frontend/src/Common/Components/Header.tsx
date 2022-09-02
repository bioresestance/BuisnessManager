import { FaBars } from "react-icons/fa";
import { sub_navigation } from "Common/Constants/Navigation";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header(props) {
  const location = useLocation();
  const [tabs, setTabs] = useState([]);
  const [title, setTitle] = useState(" ");

  useEffect(() => {
    const root = location.pathname.split("/")[1];

    // Sets the title. Capitilizes the first letter.
    setTitle(root.charAt(0).toUpperCase() + root.slice(1));

    // Check if this page has any tabs.
    if (root in sub_navigation) {
      // Create a list of Links based on the sub_navigation.
      setTabs(() => {
        return sub_navigation[root].map((value, index) => (
          // TODO: Add highlight to active link
          <Link
            key={index}
            to={`${root}/${value.tab_link}`}
            className="tab tab-bordered text-black font-bold hover-bordered mx-2"
          >
            {value.tab_name}
          </Link>
        ));
      });
    } else {
      setTabs([]);
    }
  }, [location]);

  return (
    <nav className="navbar h-12 bg-slate-200 sticky top-0">
      <div className="navbar-start">
        <button
          type="button"
          id="sidebarCollapse"
          className="rounded bg-slate-100  place-self-center p-2 m-2"
          onClick={props.updateSidebarState}
        >
          <FaBars />
        </button>
      </div>
      <div className="navbar-center">
        <div className="tabs">{tabs}</div>
      </div>
      <div className="navbar-end p-0 m-0">
        <span className="px-5 text-center text-3xl">{title}</span>
      </div>
    </nav>
  );
}
