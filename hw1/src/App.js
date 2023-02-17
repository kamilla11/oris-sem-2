import "./App.css";
import "./css/style.css";
import React from "react";
import BreedsPage from "./containers/BreedsPage";
import OneBreedPage from "./containers/OneBreedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/v1/breeds/:imageId`} element={<OneBreedPage />}></Route>
        <Route path="/" element={<BreedsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;