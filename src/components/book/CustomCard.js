import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CustomCard({ id, title, summary, url }) {
  return (
    <div>
      <Link to={`/book/${id}`} className="nav-link">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{summary}</Card.Text>
            <Button variant="primary">BookDetailee</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CustomCard;
