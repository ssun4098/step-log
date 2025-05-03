import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import "./App.css";

function App() {
  let active = 2;
  let items = [];
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
        {Array.from({ length: 16 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="shadow-sm hover-shadow">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
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

export default App;
