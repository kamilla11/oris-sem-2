import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Породы",
    key: "main",
  },
  {
    label: "Оставить отзыв",
    key: "mail",
  },
];

const DogMenu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState();

  const reloadPage = () => {
    navigate("/Breeds", { replace: false });
    window.location.reload(false);
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    e.key === "main" ? reloadPage() : navigate("/Mail", { replace: false });
  };

  return (
    <Menu
      style={{
        backgroundColor: "#eba134",
        color: "black",
      }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default DogMenu;
