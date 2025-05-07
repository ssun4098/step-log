import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

function FlashcardList() {
  const navigate = useNavigate();

  let active = 2;
  let items = [];

  const documents = [
    {
      id: 1,
      title: "React 시작하기",
      slug: "react-시작하기",
      content: "React 기초 강의입니다.",
    },
  ];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Row xs={1} md={4} className="g-4 mb-4">
        {documents.map((doc) => (
          <Col key={doc.id}>
            <Card
              className="shadow-sm hover-shadow pe-cursor"
              onClick={() => navigate(`/document/${doc.id}`)}
            >
              <Card.Body>
                <Card.Title>{doc.title}</Card.Title>
                <Card.Text>{doc.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Pagination>{items}</Pagination>
        </Col>
      </Row>
    </>
  );
}

export default FlashcardList;
