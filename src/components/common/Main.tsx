import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(
    sessionStorage.getItem("accessToken"),
  );
  const handleDesign = () => {
    if (!accessToken) {
      alert("로그인 먼저 해주세요");
      navigate("/login");
    } else {
      navigate("/design");
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/wood-texture.jpg")' }}
    >
      <section className="flex-grow bg-opacity-80 text-white text-center py-20 ">
        <div className="container mx-auto bg-wood-dark bg-opacity-70 py-10 px-4 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-4 text-wood-light">
            가구를 맞춤으로 제작하세요!
          </h2>
          <p className="mb-8 text-wood-lightest">
            Furniture that blends nature with comfort.
          </p>
          <Button
            className="bg-wood-light text-white hover:bg-wood-dark"
            onClick={handleDesign}
          >
            시작하기
          </Button>
        </div>
      </section>

      <section id="features" className="py-12 bg-wood-lightest">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-wood-dark">
            Why Our Furniture?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🪵",
                title: "Natural Materials",
                desc: "Made from sustainably sourced wood.",
              },
              {
                icon: "🎨",
                title: "Timeless Design",
                desc: "Beautiful and functional aesthetics.",
              },
              {
                icon: "🛠️",
                title: "Handcrafted",
                desc: "Each piece tells a unique story.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-wood-light rounded shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-wood-dark">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2 text-wood-dark">
                  {feature.title}
                </h4>
                <p className="text-wood-dark">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
