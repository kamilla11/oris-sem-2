import { Space, Layout, Card } from "antd";
import DogHeader from "../components/DogHeader";
import { useState } from "react";
const { Content } = Layout;

const MailPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onFinish = (e) => {
    console.log("Success:", e);
    e.preventDefault();
    setIsFormSubmitted(true);
    try {
      let res = fetch("http://localhost:5157/Mail/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          feedback: feedback,
        }),
      }).then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setFeedback("");
          setMessage("Спасибо за оставленный отзыв!");
        } else {
          setMessage("Что-то пошло не так");
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
        <Content className="content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10em",
            }}
          >
            <Card
              hoverable
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ textAlign: "center" }}>
                Поделитесь своими впечатлениями о сайте! <br />
                Не стесняйтесь, вы можете излить хоть всю душу!
              </h1>
              <form
                className="mailForm"
                onSubmit={onFinish}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <input
                  required
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setMessage("");
                    setIsFormSubmitted(false);
                  }}
                />
                <input
                  required
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                    setIsFormSubmitted(false);
                  }}
                />
                <textarea
                  required
                  type="text"
                  value={feedback}
                  rows={4}
                  placeholder="Оставьте здесь отзыв"
                  maxLength={1000}
                  onChange={(e) => {
                    setFeedback(e.target.value);
                    setMessage("");
                    setIsFormSubmitted(false);
                  }}
                />

                {isFormSubmitted ? (
                  <button type="submit" disabled>
                    Отправить
                  </button>
                ) : (
                  <button type="submit">Отправить</button>
                )}

                <div className="message">
                  {message ? <p>{message}</p> : null}
                </div>
              </form>
            </Card>
          </div>
        </Content>
      </Layout>
    </Space>
  );
};

export default MailPage;
