import Item from "../item/item";

const ItemList = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          amount={item.amount}
          status={item.status}
          by={item.by}
        />
      ))}
    </>
  );
};

export default ItemList;
