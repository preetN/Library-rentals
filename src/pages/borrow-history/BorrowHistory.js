import React, { useEffect, useState } from "react";
import AdminLayouts from "../../components/Layouts/AdminLayouts";
import { Form, Table, Button } from "react-bootstrap";
import {
  getAllBorrowHistoryAction,
  updateHistoryAction,
} from "./borrowHistoryAction";
import { useDispatch, useSelector } from "react-redux";
import { updateBookAction } from "../books/bookAction";

function History() {
  const { admin } = useSelector((state) => state.adminInfo);
  const uid = admin.uid;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBorrowHistoryAction(uid));
  }, []);

  const historyList = useSelector(
    (state) => state.borrowHistory.borrowHistoryList
  );

  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(historyList);
  }, [historyList]);
  console.log(historyList);
  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    //To filter booklist
    const filteredHistory = historyList.filter((history) =>
      history.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filteredHistory", filteredHistory);
    setDisplayList(filteredHistory);
  };
  const handleOnReturn = (history) => {
    const borrowObj = {
      id: history.id,
      isReturn: true,
      availableFrom: Date.now(),
    };
    dispatch(updateHistoryAction(borrowObj, uid));
    const bookObj = {
      id: history.bookId,
      isAvailable: true,
      availableFrom: Date.now(),
    };
    dispatch(updateBookAction(bookObj));
  };
  return (
    <AdminLayouts>
      <div className="mt-2 mb-2">
        <Form.Control
          onChange={handleOnChange}
          type="text"
          placeholder="Search by book name..."
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>BorrowedBy</th>
            <th>BorrowedAt</th>
            <th>ReturnedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <img src={item.url} width={"100px"} />
                </td>
                <td>{item.userName}</td>

                <td>{new Date(item.borrowDate).toDateString()}</td>
                <td>
                  {item.isReturn
                    ? new Date(item.availableFrom).toDateString()
                    : "Not yet Returned"}
                </td>
                <td>
                  {item.isReturn ? (
                    "Returned"
                  ) : (
                    <div className="d-grid mt-3">
                      <Button onClick={() => handleOnReturn(item)}>
                        Return
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </AdminLayouts>
  );
}

export default History;
