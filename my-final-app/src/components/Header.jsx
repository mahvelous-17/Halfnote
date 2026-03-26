import { Link } from "react-router-dom";

function Header() {
  const styles = {
    red: { color: "#ef4444", fontWeight: "500" },
    cyan: { color: "#22d3ee", fontWeight: "500" },
    green: { color: "#22c55e", fontWeight: "500" },
    yellow: { color: "#eab308", fontWeight: "500" },
    divider: { color: "#52525b", margin: "0 8px" }
  };

  return (
    <header className="bg-zinc-900 border-b border-zinc-700 fixed top-0 left-0 w-full z-50 py-2">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          
          <div className="text-xl font-bold" style={{
            background: "linear-gradient(to right, #6200ff, #00e1ff, #ff0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            color: "transparent", 
            fontSize: "15px",
            lineHeight: "17px",
            textAlign: "center",
            whiteSpace: "pre",
            border: "none",
            fontWeight: "bold"}}>
            Halfnote Healing
          </div>

          <nav className="flex items-center pt-2 whitespace-nowrap">
            <Link to="/" style={styles.red} className="hover:underline transition">
              Home
            </Link>
            
            <span style={styles.divider}>|</span>

            <Link to="/about" style={styles.cyan} className="hover:underline transition">
              About Us
            </Link>

            <span style={styles.divider}>|</span>

            <Link to="/log-mood" style={styles.green} className="hover:underline transition">
              Log Mood
            </Link>

            <span style={styles.divider}>|</span>

            <Link to="/profile" style={styles.yellow} className="hover:underline transition">
              Profile
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;