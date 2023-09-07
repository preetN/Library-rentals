import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Carousels from "../../components/book/Carousels";
import { Col, Row, Container } from "react-bootstrap";
import CustomCard from "../../components/book/CustomCard";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const bookList = useSelector((state) => state.book.bookList);
  console.log(bookList);
  return (
    <DefaultLayout>
      {/*Hero section*/}
      <Carousels />
      <Container>
        {/* Heading */}
        <Row>
          <Col>
            <h1>Available books</h1>
          </Col>
        </Row>
        {/* Book Card */}
        <Row>
          {bookList.map((book) => {
            return (
              <Col>
                <CustomCard key={book.id} {...book} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
