import SideBar from "./components/sidebar";
import Header from "./components/header";

export default function App() {
  return (
    <div className="container h-100 m-0">
      <div className="row justify-content-evenly h-100">
        <div className="col-3 bg-secondary">
          <SideBar />
        </div>

        <main className="col h-100">
          <Header />
        </main>
      </div>
    </div>
  );
}
