import { Link } from "react-router-dom";
import HoudiniTxt from "./HoudiniTxt";

function Header() {
  const styles = {
    red: { color: "#7de1ff", fontWeight: "500" },
    cyan: { color: "#d400ff", fontWeight: "500" },
    green: { color: "#7de1ff", fontWeight: "500" },
    yellow: { color: "#d400ff", fontWeight: "500" },
    divider: { color: "#ffffff", margin: "0 8px" }
  };

  return (
    <header className="bg-zinc-900 border-b border-zinc-700 fixed top-0 left-0 w-full z-50 py-2">
      <div className="max-w-4xl w-full mx-auto px-6 flex justify-between items-center h-20">
        <HoudiniTxt className="flex justify-center ">
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
        </HoudiniTxt>

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