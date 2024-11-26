import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function TopNavigation() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="bg-wood-dark text-wood-lightest py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-wood-light">Furniture</span>
        </h1>
        <nav className="space-x-4">
          <Button
            className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
            onClick={() => navigate("/shop")}
          >
            Shop
          </Button>
          <Button
            className="bg-wood-light text-wood-dark hover:bg-wood-dark hover:text-wood-lightest"
            onClick={handleLogin}
          >
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
}
