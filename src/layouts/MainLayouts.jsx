import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
