import { Link } from "react-router-dom";
import HoudiniTxt from "./HoudiniTxt";

function Header({ session }) {
  const user = session?.user;

  const styles = {
    purp: { color: "#7de1ff", fontWeight: "500" },
    cyan: { color: "#d400ff", fontWeight: "500" },
    divider: { color: "#ffffff", margin: "0 8px", opacity: 0.2 },
  };

  return (
    <header className="bg-zinc-900 fixed top-0 left-0 w-full z-50">
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
              boxShadow: "none",
              outline: "none",
              fontWeight: "bold",
            }}
          >
            Halfnote Healing
          </pre>
        </HoudiniTxt>

        <nav className="flex items-center pt-2 whitespace-nowrap gap-6">
          <Link
            to="/"
            style={styles.purp}
            className="hover:underline transition px-4 font-medium"
          >
            Home
          </Link>
          <span style={styles.divider}>|</span>

          <Link
            to="/log-mood"
            style={styles.cyan}
            className="hover:underline transition px-4 font-medium"
          >
            Log Mood
          </Link>
          <span style={styles.divider}>|</span>

          <Link
            to="/profile"
            style={styles.purp}
            className="hover:underline transition px-4 font-medium"
          >
            Profile
          </Link>
          <span style={styles.divider}>|</span>

          <Link
            to="/about"
            style={styles.cyan}
            className="hover:underline transition px-4 font-medium"
          >
            About Us
          </Link>

                  </nav>
      </div>
    </header>
  );
}

export default Header;
