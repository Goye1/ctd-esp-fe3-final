import React from "react";
import ReactDOM from "react-dom/client";
import "./css/bulma.css";
import "./css/style.css";
import App from "./App";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="favs" element={<Favs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
