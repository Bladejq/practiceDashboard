import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="font-bold text-2xl md:text-3xl tracking-wide">
          Практика
        </div>

        {/* Меню для ПК */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Басты бет
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Бургер на мобильных */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-900"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 shadow-sm">
          <Link
            to="/"
            className="block py-2 text-lg hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Басты бет
          </Link>
          <Link
            to="/about"
            className="block py-2 text-lg hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-lg hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
