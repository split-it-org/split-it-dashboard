import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Table from "./pages/table";
import Bill from "./pages/bill";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes className="container">
        <Route path="/" element={<Table />}></Route>
        <Route path="/bill" element={<Bill />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
