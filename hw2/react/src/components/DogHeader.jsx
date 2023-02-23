import React from "react";
import { Layout } from "antd";
import DogMenu from "../components/DogMenu";
const { Header } = Layout;

const DogHeader = () => {
  return (
    <Header
      style={{
        textAlign: "center",
        height: "64px",
        paddingInline: " 50px",
        lineHeight: "64px",
        fontSize: "3em",
        backgroundColor: "#eba134",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{}}>Dog breeds</div>
      <DogMenu />
    </Header>
  );
};

export default DogHeader;
