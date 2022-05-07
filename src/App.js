import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Explore from "../src/pages/Explore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/explore" element={<Explore />} />
        <Route path="*" element={<Navigate to="/explore" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
