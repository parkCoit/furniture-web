import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import TopNavigation from "@/components/common/TopNavigation";
import NotFoundPage from "@/pages/NotFoundPage";
import { Footer } from "@/components/common/Footer";
import DesignPage from "@/pages/DesignPage";
import ThreePage from "@/pages/ThreePage";
import ChatPage from "@/pages/ChatPage";

function App() {
  const location = useLocation();

  const hideTopNavPaths = ["/login", "/auth", "/error"];

  const showTopNav = !hideTopNavPaths.includes(location.pathname);
  const showFooter = !hideTopNavPaths.includes(location.pathname);
  return (
    <div className="App">
      {showTopNav && <TopNavigation />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/three" element={<ThreePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/error" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      {showTopNav && <Footer />}
    </div>
  );
}

export default App;
