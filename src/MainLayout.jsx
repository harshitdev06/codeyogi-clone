import React from "react";
import { Outlet } from "react-router-dom";
import SlideBar from "./SiderBar";

function MainLayout() {
  return (
      <div className="h-full flex items-stretch ">
          <SlideBar />
          <div className="grow h-full bg-gray-50 pl-8 relative ml-60">
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
