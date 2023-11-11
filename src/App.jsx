import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Bill from "./pages/bill";
import History from "./pages/history";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes className="container">
        <Route path="/" element={<Bill />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
