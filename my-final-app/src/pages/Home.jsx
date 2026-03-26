import { useState } from "react";

function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: "80px 20px 40px", textAlign: "center", minHeight: "80vh" }}>
      <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "0.5rem" }}>
        Welcome to Halfnote Healing
      </h2>
      <p style={{ color: "white", fontStyle: "italic", marginBottom: "2rem", opacity: 0.8 }}>
        "Where your problems are solved and guided through music"
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <pre 
          className="overflow-auto"
          style={{
            background: "linear-gradient(to right, #ff0000, #00c3ff, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            color: "transparent", 
            fontSize: "15px",
            lineHeight: "17px",
            textAlign: "center",
            whiteSpace: "pre",
            margin: "0 auto",
            border: "none",
            fontWeight: "bold"
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

      <button
        style={{
          backgroundColor: "#f4f4f5",
          color: "#18181b",
          padding: "15px 30px",
          fontSize: "1.1rem",
          fontWeight: "600",
          border: "none",
          borderRadius: "8px",
          marginTop: "40px",
          cursor: "pointer",
          transition: "transform 0.2s"
        }}
        onClick={() => setStarted(true)} 
      >
        Start Your Daily Activity
      </button>

      {started && (
        <p style={{ 
          marginTop: "24px", 
          fontWeight: "500", 
          color: "#10b981",
          fontSize: "1.1rem" 
        }}>
          ✨ Let’s get started on today’s musical journey!
        </p>
      )}
    </div>
  );
}

export default Home;