import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="container mt-4 text-center">
      <h1>Hello World</h1>
      <p>This is the starter page for Halfnote Healing</p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <pre
            style={{
              color: "black",
              fontSize: "8px",
              lineHeight: "8px",
              textAlign: "center",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflow: "hidden",
              margin: 0,
            }}
          >
{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣤⣶⣶⣾⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠟⠛⠛⢻⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣸⣿⣿⡇⠀
⠀⠀⠀⠀⠀⢀⣀⣀⣀⣿⣿⣿⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠙⠿⠿⣿⡿⠿⠛⠁⠀⠀
⠀⠀⠀⠀⠙⠿⠿⠿⠿⡟⠛⠁⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⡀⠀⠀
⠀⠀⠀⣠⣶⣿⣿⣿⣿⣷⣶⣄⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄
⠀⠀⢰⣿⡿⣿⣿⣿⣿⣿⢿⣿⡆⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿
⠀⠀⣿⣿⢱⣿⣿⣿⣿⣿⡌⣿⣿⡄⢠⣿⣿⠃⣿⣿⣿⣿⣿⣿⡗⣿⣿
⠀⣸⣿⡏⣾⣿⣿⣿⣿⣿⣧⠸⣿⣷⣾⣿⠏⠀⣿⣿⣿⣿⣿⣿⡇⣿⣿
⢠⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡆⠹⣿⣿⡏⠀⠀⣿⣿⣿⣿⣿⣿⡇⣿⣿
⠈⠙⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠛⠟⠀⠀⠀⣿⣿⣿⣿⣿⣿⡏⢿⡿
⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣿⣿⣿⢸⣿⣿⡇⠀⠀
⠀⠀⠛⠛⠛⣿⣿⠛⣿⣿⠛⠛⠛⠀⠀⠀⠀⠀⣿⣿⣿⢸⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⣿⣿⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⢸⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⣿⣿⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⢸⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⣿⣿⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⢸⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⣿⣿⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣸⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠙⠛⠀⠙⠋⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠋⠈⠛⠋⠀`}
          </pre>
        </div>
      </div>

      <h3 className="mt-4">Project Sections</h3>
      <button
        className="btn btn-primary mb-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ Menu
      </button>
      {menuOpen && (
        <ul className="list-unstyled">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">Therapy</Link></li>
          <li><Link to="/profile">Past Entries</Link></li>
        </ul>
      )}

      <div className="border p-3 mt-4" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
        <p>This is a placeholder section for future content.</p>
        <button
          className="btn btn-info me-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less 🔽" : "Show More 📖"}
        </button>
        {showMore && <p>Here’s some extra info that appears when you click "Show More".</p>}

        <button
          className="btn btn-danger"
          onClick={() => setLikes(likes + 1)}
        >
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}

export default Home;