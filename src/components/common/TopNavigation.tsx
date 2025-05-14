import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopNavigation() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(
    sessionStorage.getItem("accessToken"),
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    sessionStorage.getItem("refreshToken"),
  );

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    setAccessToken(null);
    sessionStorage.removeItem("refreshToken");
    setRefreshToken(null);
    alert("로그아웃 완료");
    navigate("/");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleChat = () => {
    navigate("/chat");
  };

  return (
    <header className="bg-wood-dark text-wood-lightest py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-wood-light cursor-pointer" onClick={handleHome}>
            Furniture
          </span>
        </h1>
        <nav className="space-x-4">
          <Button
            className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
            onClick={handleChat}
          >
            Chat
          </Button>
          {accessToken ? (
            <Button
              className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          ) : (
            <Button
              className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
