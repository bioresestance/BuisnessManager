import SideBar from "./components/sidebar";
import Header from "./components/header";
import MainSection from "./pages/main";
import { useState } from "react";

export default function App() {
  // Keep track of the state of the sidebar, wether its displayed or not.
  const [sidebarState, setSideBarState] = useState(true);

  // Main application of the site. Implements a 2 collumn site, with a sidebar and main body content.
  return (
    <div className="container h-100 m-0 p-0">
      {/* Sidebar */}
      <div className="row h-100">
        {/* Display the sidebar based on state */}
        {sidebarState && (
          <div className="col-2 p-0 m-0">
            <SideBar />
          </div>
        )}

        {/* Main body content */}
        <main className="col p-4 h-100">
          <Header
            updateSidebarState={() => setSideBarState((prevVal) => !prevVal)}
          />
          <MainSection />
        </main>
      </div>
    </div>
  );
}
