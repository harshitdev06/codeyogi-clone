import React from "react";
import { Outlet } from "react-router-dom";
import MobileNavBar from "./MoblieNavBar";
import SlideBar from "./SiderBar";

function MainLayout() {
  const [toggleSideBar, setTogggleSideBar] = React.useState(false);
  const toHideSideBar = () => {
    setTogggleSideBar(!toggleSideBar);
  };

  return (
    <div className="h-full flex items-stretch ">
      {toggleSideBar && (
        <div className="fixed top-0">
          <SlideBar toHideSideBar={toHideSideBar} />
        </div>
      )}
      <div className="sm:block hidden">
        <SlideBar />
      </div>
      <div className="grow h-full bg-gray-50 sm:pl-8 flex-1  ">
        <div className="sm:hidden block pl-3 pt-3 ">
          <MobileNavBar toToggleSideBar={toHideSideBar} />
        </div>
        <div className="py-6">
          <div className="px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
