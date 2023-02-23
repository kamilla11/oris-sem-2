import React from "react";
import { Col, Row } from "antd";
import DogCard from "../components/DogCard";
import { Link } from "react-router-dom";
import "../App.css";

const Breeds = ({ items, bHeight, bWeight, bAge, bFamily }) => {
  return (
    <Row gutter={[16, 16]}>
      {items &&
        items.length > 0 &&
        items.map((dog, index) => (
          <Link to={`/Breeds/${dog.Id}?height=${bHeight}&weight=${bWeight}&age=${bAge}&family=${bFamily}`}>
            <Col span={6}>
              <DogCard item={dog} />
            </Col>
          </Link>
        ))}
    </Row>
  );
};

export default Breeds;
