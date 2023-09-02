import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookLanding() {
  const { bookId } = useParams();
  const bookList = useSelector((state) => state.book.bookList);
  const selectedBook = bookList.find((book) => book.id === bookId);
  const { title, name, year, summary, url } = selectedBook;
  const handleOnBorrow = () => {};
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Link to={"/"}>
            <Button>&lt; Go Back</Button>
          </Link>
        </Row>
        <Row>
          {/* Image */}
          <Col>
            <img src={url} />
          </Col>
          <Col>
            <h1>{title}</h1>
            <p>Rating:5 stars</p>
            <p>
              {name}-{year}
            </p>
            <p>{summary}</p>
            <p>
              <Button onClick={handleOnBorrow}>Borrow</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default BookLanding;
