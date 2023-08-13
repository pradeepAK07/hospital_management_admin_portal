import React from "react";
import "./SideNavbar.scss";
import { SideNavBarMock } from "../../MockData/SideNavBarMock";
import { useNavigate } from "react-router-dom";
const SideNavbar = () => {
  const navigate = useNavigate();

  const HandlePage = (url) => {
    navigate(url);
  };

  return (
    <div className="SideNavbar">
      <div className="SideNavbar-container">
        {SideNavBarMock.map((items, i) => {
          return (
            <div className="sidebar-header">
              {<items.icon size={29} className="icon" />}
              <button
                className="side-header"
                keys={i}
                onClick={() => HandlePage(items.url)}
              >
                {items.tabname}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
