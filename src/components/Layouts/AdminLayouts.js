import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../sidebar/SideBar";
function AdminLayouts({ children }) {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-75 flex-grow-1">
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminLayouts;
