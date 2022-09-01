import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { navigation } from "../constants/navigation";

export default function SideBar() {
  const navItems = navigation.map((item, index) => (
    <div key={index}>
      <Link
        to={`${item.link}`}
        className="flex  border-gray-700  border-2 mb-2 items-center text-lg py-3 px-6 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        {item.text}
      </Link>
    </div>
  ));

  return (
    <div className=" flex flex-col  h-full shadow-lg" id="sidebar">
      <nav className="mx-2 grow">
        <div className="text-2xl font-bold text-center pb-3 border-b-2 border-black">
          <h2>Home Lab Supervisor</h2>
        </div>
        <div className="list-group h5 navbar-nav my-5  gap-3 text-center mx-2">
          {navItems}
        </div>
      </nav>

      <div className="py-4 border-t-2 border-black text-center">
        <span className="">footer text here</span>
      </div>
    </div>
  );
}
