import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-zinc-900 text-white border-b border-zinc-700">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Halfnote Healing</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;