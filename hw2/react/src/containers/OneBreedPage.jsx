import "../App.css";
import React, { useState, useEffect } from "react";
import { Card, Layout, Space } from "antd";
import { useParams, Link, useNavigate , useSearchParams} from "react-router-dom";
import DogHeader from "../components/DogHeader";
const { Content } = Layout;

const OneBreedPage = (props) => {
  const [searchParams] = useSearchParams();

  const height = searchParams.get("height");
  const weight = searchParams.get("weight");
  const age = searchParams.get("age");
  const family = searchParams.get("family");

  const navigate = useNavigate();
  const params = useParams(props);

  const requestOptions = {
    method: "GET",
  };

  const [breed, setBreed] = useState({
    Id: 2,
    Name: "Afghan Hound",
    Weight: " 50 to 60 pounds",
    Height: "25 to 27 inches at the shoulder",
    LifeSpan: "10 to 13 years",
    BredFor: "Coursing and hunting",
    BreedGroup: "Hound",
    Url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    Temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  });

  useEffect(() => {
    fetch(`http://localhost:5157/Breeds/${params.Id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setBreed(data));
  });

  return (
    <>
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
            <div style={{ marginTop: 15, marginLeft: 15 }}>
              <Link to={`/Breeds?height=${height}&weight=${weight}&age=${age}&family=${family}`}
                style={{ color: "black", fontSize: "1.5em" }}
                /* onClick={() => navigate(-1)} */
              >
                Назад
              </Link>
              {/* <button  className="button icon-left" onClick={() => navigate(-1)}>go back</button> */}
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
                    src={breed.Url}
                  />
                }
              >
                {console.log(breed)}
                <p>
                  <strong>Имя: </strong>
                  {breed.Name}
                </p>
                <p>
                  <strong>Вес: </strong>
                  {breed.Weight}
                </p>
                <p>
                  <strong>Рост: </strong>
                  {breed.Height}
                </p>
                <p>
                  <strong>Продолжительность жизни: </strong>
                  {breed.LifeSpan}
                </p>
                <p>
                  <strong>Темперамент: </strong>
                  {breed.Temperament}
                </p>
                <p>
                  <strong>Группа пород: </strong>
                  {breed.BreedGroup}
                </p>
              </Card>
            </div>
          </Content>
        </Layout>
      </Space>
    </>
  );
};

export default OneBreedPage;
