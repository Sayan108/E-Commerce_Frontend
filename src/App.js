import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Itemdetails from "./components/itemdetails";
import Checkout from "./components/checkout";
import Payment from "./components/payment";
import PageNotFound from "./components/pagenotfound";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login ";
import RegistrationForm from "./components/registration";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/itemdetails" element={<Itemdetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
