import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>ss</div>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
