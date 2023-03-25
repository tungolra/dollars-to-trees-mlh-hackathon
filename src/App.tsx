import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getEstimate } from "./api/api";
import EstimatorPage from "./pages/EstimatorPage";

interface ApiResponse {
  data: string[];
}

function App() {
  return (
    <div className="App">
      <EstimatorPage />
    </div>
  );
}

export default App;
