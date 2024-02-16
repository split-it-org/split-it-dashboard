import { Card, Row, Col } from "react-bootstrap";

const Order = (props) => {
  const subtotal = props.payed - props.tip;
  const tipPercentage = (props.tip * 100) / subtotal;
  return (
    <Card className={`m-2`}>
      <Card.Body>
        <Card.Title>{props.user}</Card.Title>
        <Card.Text>
          <Row>
            <Col className="d-flex flex-column">
              <span>
                <b>Subtotal:</b> {subtotal} MXN
              </span>
              <span>
                <b>Tip:</b> {props.tip} MXN {`(${tipPercentage}%)`}
              </span>
              <span>
                <b>Total:</b> {props.payed} MXN
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
