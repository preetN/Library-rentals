import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../sidebar/SideBar";
function AdminLayouts({ children }) {
  return (
    <>
      <Header />
      <div className="d-flex">
        <SideBar />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLayouts;
