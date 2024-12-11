import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function TopNavigation() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleCart = () => {
    navigate("/cart");
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
            onClick={handleCart}
          >
            Cart
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
