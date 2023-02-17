import "../App.css";
import React, { useState, useEffect } from "react";
import { Col, Row, Layout, Space } from "antd";
import DogCard from "../components/DogCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Breeds from "./Breeds";
const { Header, Content } = Layout;

const BreedsPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // State to display error message
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const requestOptions = {
      method: "GET",
      headers: {
        "x-api-key":
          "live_X5hxZ27hUp4dmZHvHdT2LGwE6fpK1AJwZp2yQhPXBBrc8N5PN214vSItoH4educR",
      },
    };
    fetch(
      // "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=10",
      "https://api.thedogapi.com/v1/breeds/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .then(() => setIsLoading(false)) // Hide loading screen
      .catch(() => setErrorMessage("Unable to fetch dog breeds"))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header class="header">
          <strong>Dog breeds</strong>
        </Header>
        <Content class="content">
          {isLoading ? <LoadingSpinner /> : <Breeds items={breeds} />}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </Content>
      </Layout>
    </Space>
  );
};

export default BreedsPage;