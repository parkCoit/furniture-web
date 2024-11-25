import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to MyProject</h2>
          <p className="mb-8">A place where innovation meets simplicity.</p>
          <Button className="bg-white text-blue-600">Get Started</Button>
        </div>
      </section>

      <section id="features" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Fast", desc: "Lightning fast speed." },
              { icon: "🔒", title: "Secure", desc: "Top-notch security." },
              { icon: "🌍", title: "Global", desc: "Accessible worldwide." },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded shadow text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
