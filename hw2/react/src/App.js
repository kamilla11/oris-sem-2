import "./App.css";
//import "./css/style.css";
import React from "react";
import BreedsPage from "./containers/BreedsPage";
import OneBreedPage from "./containers/OneBreedPage";
import MailPage from "./containers/MailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/Breeds/:Id`} element={<OneBreedPage />}></Route>
        <Route path="/Breeds" element={<BreedsPage />}></Route>
        <Route path="/Mail" element={<MailPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;