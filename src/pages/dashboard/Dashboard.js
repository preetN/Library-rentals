import React from "react";
import AdminLayouts from "../../components/Layouts/AdminLayouts";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
function Dashboard() {
  const { admin } = useSelector((state) => state.adminInfo);
  const { bookList } = useSelector((state) => state.book);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  return (
    <>
      <AdminLayouts>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="profile.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>

            <Card.Text>
              <Row>
                <Col>
                  {" "}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Col>
                <Col>ejfnkemfklew</Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </AdminLayouts>
    </>
  );
}

export default Dashboard;
