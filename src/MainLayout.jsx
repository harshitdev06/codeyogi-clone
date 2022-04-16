import React from "react";
import { Outlet } from "react-router-dom";
import SlideBar from "./SiderBar";

function MainLayout() {
  const [toggleSideBar, setTogggleSideBar] = React.useState(false);

  return (
    <div className="h-full flex items-stretch ">
      {toggleSideBar && <SlideBar ExtraClassNames={" z-10 sm:z-0 "} />}
      {!toggleSideBar && (
        <div className="sm:block hidden">
          <SlideBar ExtraClassNames={" z-10 sm:z-0 "} />
        </div>
      )}
      <div className="grow h-full bg-gray-50 sm:pl-8 flex-1 px-4 ">
        <div className="py-6">
          <div className="px-4">
            <Outlet context={[toggleSideBar, setTogggleSideBar]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
