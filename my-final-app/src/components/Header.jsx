import { Link } from "react-router-dom";

function Header() {
  const styles = {
    red: { color: "#ef4444", fontWeight: "500" },
    cyan: { color: "#22d3ee", fontWeight: "500" },
    green: { color: "#22c55e", fontWeight: "500" },
    yellow: { color: "#eab308", fontWeight: "500" },
    divider: { color: "#6d6d6d", margin: "0 8px" }
  };

  return (
    <header className="bg-zinc-900 border-b border-zinc-700 fixed top-0 left-0 w-full z-50 py-2">
      <style>{`
        @property --gradient-start {
          syntax: "<color>";
          initial-value: #00c3ff;
          inherits: false;
        }
        @property --gradient-end {
          syntax: "<color>";
          initial-value: #d400ff;
          inherits: false;
        }
        .houdini-gradient {
          background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
          animation: houdini-colors 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes houdini-colors {
          0%, 100% {
            --gradient-start: #00c3ff;
            --gradient-end: #d400ff;
          }
          33% {
            --gradient-start: #ffffff;
            --gradient-end: #00c3ff;
          }
          66% {
            --gradient-start: #279c39;
            --gradient-end: #00c3ff;
          }
        }
      `}</style>

      <div className="max-w-4xl w-full mx-auto px-6 flex justify-between items-center h-20">
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <pre 
            className="overflow-auto houdini-gradient"
            style={{
              display: "inline-block",
              fontSize: "15px",
              lineHeight: "17px",
              textAlign: "center",
              whiteSpace: "pre",
              margin: "0 auto",
              border: "none",
              fontWeight: "bold"
            }}
          >
            Halfnote Healing
          </pre>
        </div>

        <nav className="flex items-center pt-2 whitespace-nowrap gap-6">
          <Link to="/" style={styles.red} className="hover:underline transition px-4 font-medium">
            Home
          </Link>
          <span style={styles.divider}>|</span>

          <Link to="/about" style={styles.cyan} className="hover:underline transition px-4 font-medium">
            About Us
          </Link>
          <span style={styles.divider}>|</span>

          <Link to="/log-mood" style={styles.green} className="hover:underline transition px-4 font-medium">
            Log Mood
          </Link>
          <span style={styles.divider}>|</span>

          <Link to="/profile" style={styles.yellow} className="hover:underline transition px-4 font-medium">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;