import SideBar from "./components/sidebar";
import Header from "./components/header";
import Message from "./components/mesage";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  // Keep track of the state of the sidebar, wether its displayed or not.
  const [sidebarState, setSideBarState] = useState(true);
  const [messages, setMessages] = useState([
    // { message: "Hello world", type: "success" },
    // { message: "Hello world", type: "warning" },
  ]);

  const deleteMessage = (id) => {
    console.log(id);
    setMessages((prevVal) => {
      prevVal.splice(id, 1);
      return prevVal;
    });
    console.log(messages);
  };

  let messageComponents = messages.map((message, index) => {
    return (
      <Message
        key={index}
        id={index}
        message={message.message}
        type={message.type}
        close={deleteMessage}
        timeout={message.timeout}
      />
    );
  });

  // Main application of the site. Implements a 2 column site, with a sidebar and main body content.
  return (
    <div className="flex m-0 p-0 gap-3">
      {/* Display the sidebar based on state */}
      {sidebarState && (
        <div className="p-0 m-0 max-w-md h-screen bg-zinc-300 sticky top-0 left-0">
          <SideBar />
        </div>
      )}

      {/* Main body content */}
      <main className="w-full flex flex-col">
        <Header
          updateSidebarState={() => setSideBarState((prevVal) => !prevVal)}
        />
        {messageComponents}
        {/* Outputs the content of the route */}
        <Outlet />
      </main>
    </div>
  );
}
