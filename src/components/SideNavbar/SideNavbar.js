import React, { useState } from "react";
import "./SideNavbar.scss";
import { SideNavBarMock } from "../../MockData/SideNavBarMock";
import { useNavigate } from "react-router-dom";
const SideNavbar = () => {
  const navigate = useNavigate();

  const HandlePage = (page) => {
    ChangePage(page);
  };

  const ChangePage = (page) => {
    if (SideNavBarMock[0] === page) {
      navigate("dashboard");
    }
  };

  return (
    <div className="SideNavbar">
      <div className="SideNavbar-container">
        {SideNavBarMock.map((items, i) => {
          return (
            <>
              <button
                className="side-header"
                keys={i}
                onClick={() => HandlePage(items)}
              >
                {items}
              </button>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
