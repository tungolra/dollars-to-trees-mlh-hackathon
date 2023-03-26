import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EstimatorPage from "./pages/EstimatorPage";
import EnvBG from "./icons/environment-bg.svg";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <img
        src={EnvBG}
        alt="environment background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.3,
        }}
      />
      <Header />
      <EstimatorPage />
      <Footer />
    </div>
  );
}

export default App;
