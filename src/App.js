import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import History from "./pages/history/History";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";

import "../src/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { getUserAction } from "./user/userAction";
import NewBook from "./pages/books/NewBook";
import EditBook from "./pages/books/EditBook";
import { useEffect } from "react";
import { getAllBookAction } from "./pages/books/bookAction";
import BookLanding from "./pages/books/BookLanding";
import PublicSignUp from "./pages/auth/PublicSignUp";
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user.uid));
  });
  useEffect(() => {
    dispatch(getAllBookAction());
  });
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Login />} />
          <Route path="/signup" element={<PublicSignUp />} />
          <Route path="book/:bookId" element={<BookLanding />} />
          {/* private route */}
          <Route
            path="admin-signup"
            element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            }
          />
          <Route
            path="history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="books"
            element={
              <PrivateRoute>
                <Books />
              </PrivateRoute>
            }
          />
          <Route
            path="clients"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="new-book"
            element={
              <PrivateRoute>
                <NewBook />
              </PrivateRoute>
            }
          />
          <Route
            path="edit-book/:id"
            element={
              <PrivateRoute>
                <EditBook />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<p>Url is invalid</p>} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
