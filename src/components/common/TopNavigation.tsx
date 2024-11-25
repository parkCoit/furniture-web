import { Button } from "@/components/ui/button";
import { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface CustomJwtPayload extends JwtPayload {
  id?: string;
  nickname?: string;
}

export default function TopNavigation() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Furniture</h1>
        <nav className="space-x-4">
          <Button onClick={handleLogin}>Login</Button>
        </nav>
      </div>
    </header>
  );
}
