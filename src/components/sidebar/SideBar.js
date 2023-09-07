import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isStudent } from "../../util/index";
function SideBar() {
  const { admin } = useSelector((state) => state.adminInfo);
  return (
    <div className="bg-dark text-light">
      <div className="mt-4 text-center">
        {isStudent(admin) ? "Student" : "Admin"}
        <hr />
        <div className="">
          {isStudent(admin) ? (
            <ul className="list-unstyled ms-5 me-5">
              <li>
                <Link className="nav-link" to="/history">
                  History
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="list-unstyled ms-5 me-5">
              <li>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/clients">
                  Clients
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/admin-signup">
                  Signup new Admin
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
