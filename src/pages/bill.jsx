import { useState } from "react";
import { Container, Form, Button, Tabs, Tab } from "react-bootstrap";
import ItemList from "../components/item-list/item-list";
import OrderList from "../components/order-list/order-list";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const Bill = () => {
  const [restaurant, setRestaurant] = useState("");
  const [table, setTable] = useState("");
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  async function fetchData() {
    try {
      const restaurantDocRef = doc(db, "table", `${restaurant}_${table}`);
      const restaurantDocSnap = await getDoc(restaurantDocRef);
      if (restaurantDocSnap.exists()) {
        const restaurantData = restaurantDocSnap.data();
        const billID = restaurantData.billID;
        const billDocRef = doc(db, "bill", billID);
        const billDocSnap = await getDoc(billDocRef);
        let userHash = {};
        if (billDocSnap.exists()) {
          const billData = billDocSnap.data();
          const userIds = billData.users;
          if (userIds?.length) {
            let usersData = await Promise.all(
              userIds.map(async (id) => {
                const userDocRef = doc(db, "user", id);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                  return { id, ...userDocSnap.data() };
                }
              })
            );
            usersData = usersData.filter(Boolean);
            userHash = usersData.reduce((acc, curr) => {
              return { ...acc, [curr.id]: curr };
            }, {});
          }
          await fetchItems(billData, userHash);
        }
        await fetchOrders(billID, userHash);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchItems(billData, userHash) {
    const items = billData.items.map((item) => ({
      name: item.name,
      price: item.price,
      amount: item.amount,
      status: item.payed ? "Payed" : item.blocked.status ? "Blocked" : "None",
      by: item.blocked.by
        ? `${item.blocked.by} (${userHash[item.blocked.by]?.name} ${
            userHash[item.blocked.by]?.lastname
          })`
        : "",
    }));
    setItems(items);
  }

  async function fetchOrders(billID, userHash) {
    const q = query(collection(db, "order"), where("billId", "==", billID));
    const orderSnapshot = await getDocs(q);
    let orders = [];
    orderSnapshot.forEach((doc) => orders.push(doc.data()));
    orders = orders.map((order) => ({
      user: `${order.userId} (${userHash[order.userId]?.name} ${
        userHash[order.userId]?.lastname
      })`,
      payed: order.price,
      time: order.time.toDate().toString(),
    }));
    setOrders(orders);
  }

  return (
    <Container>
      <h3>Current Bills</h3>
      <div className="my-4 d-flex gap-3">
        <Form.Control
          placeholder="Restaurant"
          value={restaurant}
          onChange={(evt) => setRestaurant(evt.target.value)}
        />
        <Form.Control
          placeholder="Table"
          type="number"
          value={table}
          onChange={(evt) => setTable(evt.target.value)}
        />
        <Button onClick={fetchData}>Search</Button>
      </div>
      <hr />
      <Tabs>
        <Tab eventKey="items" title="Items">
          <ItemList items={items} />
        </Tab>
        <Tab eventKey="orders" title="Orders">
          <OrderList orders={orders} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Bill;
