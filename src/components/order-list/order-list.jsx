import Order from "../order/order";

const OrderList = (props) => {
  return (
    <>
      {props.orders.map((order, index) => (
        <Order
          key={index}
          user={order.user}
          payed={order.payed}
          time={order.time}
        />
      ))}
    </>
  );
};

export default OrderList;
