import React from "react";
import "../styles/LayoutStyles.css";
import { Link, useLocation } from "react-router-dom";
import { SidebarMenu } from "../Data/data";
export default function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DOC APP</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}>
                        <Link to={menu.path}>{menu.name}</Link>
                      </i>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">Header</div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
