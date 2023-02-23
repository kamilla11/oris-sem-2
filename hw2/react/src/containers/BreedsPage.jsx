import "../App.css";
import "../css/style.module.css";
import "../css/spinner.css";
import React, { useState, useEffect } from "react";
import { Layout, Space, Pagination } from "antd";
import DogHeader from "../components/DogHeader";
import DogFilter from "../components/DogFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import Breeds from "./Breeds";
import { useSearchParams } from "react-router-dom";
const { Content } = Layout;

const BreedsPage = () => {
  const [searchParams] = useSearchParams();

  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);

  const [height, setHeight] = useState(
    searchParams.get("height") === null
      ? "notSelected"
      : searchParams.get("height")
  );
  const [weight, setWeight] = useState(
    searchParams.get("weight") === null
      ? "notSelected"
      : searchParams.get("weight")
  );
  const [age, setAge] = useState(
    searchParams.get("age") === null ? "notSelected" : searchParams.get("age")
  );
  const [family, setFamily] = useState(
    searchParams.get("family") === null
      ? "notSelected"
      : searchParams.get("family")
  );

  const handleHeightChange = (value) => {
    console.log(`selected ${value}`);
    setHeight(value);
  };

  const handleWeightChange = (value) => {
    console.log(`selected ${value}`);
    setWeight(value);
  };

  const handleAgeChange = (value) => {
    console.log(`selected ${value}`);
    setAge(value);
  };

  const handleFamilyChange = (value) => {
    console.log(`selected ${value}`);
    setFamily(value);
  };

  const onShowSizeChange = (current, size) => {
    console.log(current, size);
    setCurrentPage(current);
    setPageSize(size);
  };

  const reloadPage = () => {
    setIsLoading(true);
    const requestOptions = {
      method: "GET",
    };
    fetch(
      `http://localhost:5157/Breeds?currentPage=${currentPage}&pageSize=${pageSize}&height=${height}&weight=${weight}&age=${age}&family=${family}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .then(() => setIsLoading(false)) // Hide loading screen
      .catch(() => setErrorMessage("Unable to fetch dog breeds"))
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    reloadPage();
  }, [currentPage, pageSize, height, weight, age, family]);

  const filter = {
    fHeight: { height },
    wfWight: { weight },
    fAge: { age },
    fFamily: { family },
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <DogHeader />
        <Content class="content">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <DogFilter
                handleHeightChange={handleHeightChange}
                handleWeightChange={handleWeightChange}
                handleAgeChange={handleAgeChange}
                handleFamilyChange={handleFamilyChange}
                {...{ filter }}
              />
              <Breeds
                items={breeds}
                bHeight={height}
                bWeight={weight}
                bAge={age}
                bFamily={family}
              />{" "}
              <Pagination
                style={{ marginBottom: "3em", textAlign: "center" }}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                onChange={onShowSizeChange}
                defaultCurrent={currentPage}
                total={172}
              />
            </>
          )}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </Content>
      </Layout>
    </Space>
  );
};

export default BreedsPage;
