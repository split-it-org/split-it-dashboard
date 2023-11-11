import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Item = (props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (props.status == "Payed") setColor("border-success");
    if (props.status == "Blocked") setColor("border-warning");
    if (props.status == "None") setColor("border-danger");
  }, [props.status]);

  return (
    <Card className={`my-2 border border-3 ${color}`}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col className="d-flex flex-column">
              <span>
                <b>Amount:</b> {props.amount}
              </span>
              <span>
                <b>Price:</b> {props.price} MXN
              </span>
            </Col>
            <Col className="d-flex flex-column">
              <span>
                <b>Status:</b> {props.status}
              </span>
              <span>
                <b>By:</b> {props.by}
              </span>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
