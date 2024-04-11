import React from "react";
import "./assets/css/style.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Company from "./components/Company";
import Community from "./components/Community";
import Product from "./components/Product";
import { vData } from "./data";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Main vData={vData} />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Product/:item" element={<Product vData={vData} />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
