import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Sidebar from "../component/Header/SideBar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "../component/Header/MobileMenu";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className="relative flex  ">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 overflow-y-auto scrollbar-hide ${sidebarOpen ? 'w-64 lg:block block hidden' : 'w-12 lg:block hidden'} `}>
        <Sidebar isSidebarOpen={sidebarOpen} />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-12'}`}>
        {/* Header */}
        <div className={`fixed top-0 left-0 right-0 h-12 bg-primary-900 z-10  ${sidebarOpen ? 'lg:left-64' : 'lg:left-12'}`}>
          <div className="flex items-center justify-between h-full px-4">
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl hidden lg:block"
            >
              <FaBars />
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden block">
              <MobileMenu isSidebarOpen={true} />
            </div>
            <Header />
          </div>
        </div>

        {/* Outlet */}
        <div className=" overflow-auto mt-12 p-4">
          <Outlet />
        </div>
      </div>
    </div>

    </>
  );
};

export default RootLayout;

