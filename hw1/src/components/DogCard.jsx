import "../App.css";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const DogCard = ({ item }) => {
  return (
    <Card
      hoverable
      style={{
        margin: 50,
        width: 240,
        height: 300,
      }}
      cover={
        <img
          style={{
            width: 240,
            height: 240,
            objectFit: "cover",
          }}
          alt="dog"
          src={item.image.url}
        />
      }
    >
      <Meta title={item.name} />
    </Card>
  );
};

export default DogCard;
