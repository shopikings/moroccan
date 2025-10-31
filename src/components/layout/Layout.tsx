import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
