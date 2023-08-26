import React from "react";
import AdminLayouts from "../../components/Layouts/AdminLayouts";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import BookTable from "../../components/book/BookTable";
import { useDispatch } from "react-redux";
import { deleteBookAction } from "./bookAction";
function Books() {
  return (
    <>
      <AdminLayouts>
        <h3>Books</h3>
        <hr />
        <div>
          <Link to="/new-book" />
          <Button>Add Book</Button>
        </div>
        <BookTable />
      </AdminLayouts>
    </>
  );
}

export default Books;
