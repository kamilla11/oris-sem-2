import { Select, Space } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

const DogFilter = ({
  handleHeightChange,
  handleWeightChange,
  handleAgeChange,
  handleFamilyChange,
  filter: { fHeight, fWeight, fAge, fFamily },
}) => {
  const [searchParams] = useSearchParams();

  const quryHeight =
    searchParams.get("height") === null
      ? "notSelected"
      : searchParams.get("height");
  const quryWeight =
    searchParams.get("weight") === null
      ? "notSelected"
      : searchParams.get("weight");
  const quryAge =
    searchParams.get("age") === null ? "notSelected" : searchParams.get("age");
  const quryFamily =
    searchParams.get("family") === null
      ? "notSelected"
      : searchParams.get("family");

  const handleLocalHeightChange = (value) => {
    console.log(`selected ${value}`);
    handleHeightChange(value);
  };

  const handleLocalWeightChange = (value) => {
    console.log(`selected ${value}`);
    handleWeightChange(value);
  };
  const handleLocalAgeChange = (value) => {
    console.log(`selected ${value}`);
    handleAgeChange(value);
  };
  const handleLocalFamilyChange = (value) => {
    console.log(`selected ${value}`);
    handleFamilyChange(value);
  };

  return (
    <Space wrap style={{ marginTop: "2em", marginLeft: "50px" }}>
      <Select
        defaultValue={quryHeight}
        style={{
          width: 120,
        }}
        onChange={handleLocalHeightChange}
        options={[
          {
            value: "notSelected",
            label: "Рост",
          },
          {
            value: "up",
            label: "По возрастанию",
          },
          {
            value: "down",
            label: "По убыванию",
          },
        ]}
      />
      <Select
        defaultValue={quryWeight}
        style={{
          width: 120,
        }}
        onChange={handleLocalWeightChange}
        options={[
          {
            value: "notSelected",
            label: "Вес",
          },
          {
            value: "up",
            label: "По возрастанию",
          },
          {
            value: "down",
            label: "По убыванию",
          },
        ]}
      />
      <Select
        defaultValue={quryAge}
        style={{
          width: 120,
        }}
        onChange={handleLocalAgeChange}
        options={[
          {
            value: "notSelected",
            label: "Возраст",
          },
          {
            value: "up",
            label: "По возрастанию",
          },
          {
            value: "down",
            label: "По убыванию",
          },
        ]}
      />
      <Select
        defaultValue={quryFamily}
        style={{
          width: 120,
        }}
        onChange={handleLocalFamilyChange}
        options={[
          {
            value: "notSelected",
            label: "Семейство",
          },
          {
            value: "up",
            label: "По возрастанию",
          },
          {
            value: "down",
            label: "По убыванию",
          },
        ]}
      />
    </Space>
  );
};
export default DogFilter;
