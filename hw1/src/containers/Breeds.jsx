import React, { useState, useEffect } from "react";
import { Col, Row, Layout, Space } from "antd";
import DogCard from "../components/DogCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import "../App.css";
const { Header, Content } = Layout;

const Breeds = ({ items }) => {
  return (
    <Row gutter={[16, 16]}>
      {items &&
        items.length > 0 &&
        items.map((dog, index) => (
          <Link to={`/v1/breeds/${dog.image.id}`}>
            <Col span={6}>
              <DogCard item={dog} />
            </Col>
          </Link>
        ))}
    </Row>
  );
};

export default Breeds;
