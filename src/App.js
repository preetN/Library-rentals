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

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/books" element={<Books />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
