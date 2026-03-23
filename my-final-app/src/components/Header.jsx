import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ padding: "20px", background: "#1a1a1a", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", color: "white" }}>Halfnote Healing</h1>
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: "none", border: "none", color: "white", fontSize: "2rem", cursor: "pointer" }}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/" style={{ color: "white", textDecoration: "none" }} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" style={{ color: "white", textDecoration: "none" }} onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;