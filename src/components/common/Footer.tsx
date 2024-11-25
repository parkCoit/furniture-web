import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; GitHub </p>
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
