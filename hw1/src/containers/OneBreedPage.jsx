import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { useParams, Link } from "react-router-dom";

const OneBreedPage = (props) => {
  const params = useParams(props);

  const requestOptions = {
    method: "GET",
    headers: {
      "x-api-key":
        "live_X5hxZ27hUp4dmZHvHdT2LGwE6fpK1AJwZp2yQhPXBBrc8N5PN214vSItoH4educR",
    },
  };

  const [breedsWithImg, setBreedsWithImg] = useState({
    id: "BkIEhN3pG",
    url: "",
    width: 912,
    height: 1024,
    mime_type: "image/jpeg",
    breeds: [
      {
        id: 10,
        name: "American Bulldog",
      },
    ],
    categories: [],
    breed_ids: "10",
  });

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com/v1/images/${params.imageId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setBreedsWithImg(data));
  });

  const [breed, setBreed] = useState({
    id: 2,
    name: "Afghan Hound",
    weight: " 50 to 60 pounds",
    height: "25 to 27 inches at the shoulder",
    life_span: "10 to 13 years",
    bred_for: "Coursing and hunting",
    breed_group: "Hound",
  });

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com//v1/breeds/${breedsWithImg.breeds[0].id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setBreed(data));
  });

  return (
    <>
      <div style={{ marginTop: 15, marginLeft: 15 }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Назад
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card
          hoverable
          style={{
            width: 500,
          }}
          cover={
            <img
              style={{
                width: 500,
                height: 400,
                objectFit: "cover",
              }}
              alt="dog"
              src={breedsWithImg.url}
            />
          }
        >
          {console.log(breed)}
          <p>
            <strong>Имя: </strong>
            {breed.name}
          </p>
          <p>
            <strong>Вес: </strong>
            {breed.weight.metric}
          </p>
          <p>
            <strong>Рост: </strong>
            {breed.height.metric}
          </p>
          <p>
            <strong>Продолжительность жизни: </strong>
            {breed.life_span}
          </p>
          <p>
            <strong>Темперамент: </strong>
            {breed.temperament}
          </p>
          <p>
            <strong>Группа пород: </strong>
            {breed.breed_group}
          </p>
        </Card>
      </div>
    </>
  );
};

export default OneBreedPage;