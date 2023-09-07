import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addNewBorrowAction } from "../borrow-history/borrowHistoryAction";

function BookLanding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const user = useSelector((state) => state.adminInfo.admin);
  const bookList = useSelector((state) => state.book.bookList);
  const [selectedBook, setSelectedBook] = useState({});
  useEffect(() => {
    const tempBook = bookList.find((book) => book.id === bookId);
    setSelectedBook(tempBook);
  }, [bookList, bookId]);

  console.log(selectedBook);
  const handleOnBorrow = () => {
    //create history obj
    const history = {
      userId: user.uid,
      userName: user.fName,
      bookId: bookId,
      title: selectedBook?.title,
      url: selectedBook?.url,
      borrowDate: Date.now(),
      //days in millisecond
      availableFrom: Date.now() + (14 + 24 + 60 + 60 + 1000),
    };
    dispatch(addNewBorrowAction(history));
  };
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Link to={"/"}>
            <Button className="mb-2">&lt; Go Back</Button>
          </Link>
        </Row>
        <Row>
          {/* Image */}
          <Col>
            <img src={selectedBook?.url} alt="pic" />
          </Col>
          <Col>
            <h1>{selectedBook?.title}</h1>
            <p>Rating:5 stars</p>
            <p>
              {selectedBook?.name}-{selectedBook?.year}
            </p>
            <p>{selectedBook?.summary}</p>
            <p>
              {user?.uid ? (
                selectedBook?.isAvailable ? (
                  <Button onClick={handleOnBorrow}>Borrow </Button>
                ) : (
                  <p>
                    <Button disabled>Not available</Button> Available after{" "}
                    {new Date(selectedBook?.availableFrom).toString()} date
                  </p>
                )
              ) : (
                <Button onClick={() => navigate("/signin")}>
                  Login to Borrow
                </Button>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default BookLanding;
