import SideBar from "./components/sidebar";
import Header from "./components/header";
import MainSection from "./pages/main";
import { useState } from "react";

export default function App() {
  // Keep track of the state of the sidebar, wether its displayed or not.
  const [sidebarState, setSideBarState] = useState(true);

  // Main application of the site. Implements a 2 column site, with a sidebar and main body content.
  return (
    <div className="flex w-full h-full m-0 p-0 gap-3">
      {/* Display the sidebar based on state */}
      {sidebarState && (
        <div className="p-0 m-0 max-w-md bg-zinc-300">
          <SideBar />
        </div>
      )}

      {/* Main body content */}
      <main className="w-full">
        <Header
          updateSidebarState={() => setSideBarState((prevVal) => !prevVal)}
        />
        <MainSection />
      </main>
    </div>
  );
}
