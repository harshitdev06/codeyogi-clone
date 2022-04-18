import React from "react";
function MobileNavBar({ toToggleSideBar }) {
  return (
    <div className="sm:hidden block mt-0">
      <button onClick={toToggleSideBar}>
        <img src="https://img.icons8.com/plumpy/24/000000/menu-rounded.png" />
      </button>
    </div>
  );
}
export default MobileNavBar;
