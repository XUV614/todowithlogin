// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'
function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>Authentication App</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

        <Outlet />

    </div>
  );
}

export default Layout;
