import { Card, Row, Col } from "react-bootstrap";

const Order = (props) => {
  return (
    <Card className={`m-2`}>
      <Card.Body>
        <Card.Title>{props.user}</Card.Title>
        <Card.Text>
          <Row>
            <Col className="d-flex flex-column">
              <span>
                <b>Payed:</b> {props.payed} MXN
              </span>
              <span>
                <b>Time:</b> {props.time}
              </span>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Order;
