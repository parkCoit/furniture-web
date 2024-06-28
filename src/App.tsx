import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
