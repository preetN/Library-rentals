import React from "react";
import AdminLayouts from "../../components/Layouts/AdminLayouts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import profileimg from "./profile.jpeg";
function Dashboard() {
  const { admin } = useSelector((state) => state.adminInfo);
  const { bookList } = useSelector((state) => state.book);
  const avail = bookList.filter((book) => book.isAvailable === true);
  const Navail = bookList.filter((book) => book.isAvailable === false);

  const data = [
    {
      name: "Available books",
      Available: avail.length,
      Not_available: Navail.length,
    },
  ];
  return (
    <>
      <AdminLayouts>
        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={profileimg} />
            <Card.Body>
              <Card.Title>{admin.fName + " " + admin.lName}</Card.Title>
              <Card.Text>
                <div>{"(" + admin.role + ")"}</div>
                <div>{admin.email}</div>
                <div>{admin.phone}</div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
            <h3 className="mt-3">Number of books available to borrow</h3>

            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Not_available" fill="#8884d8" />
              <Bar dataKey="Available" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </AdminLayouts>
    </>
  );
}

export default Dashboard;
