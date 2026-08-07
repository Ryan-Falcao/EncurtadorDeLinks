import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
