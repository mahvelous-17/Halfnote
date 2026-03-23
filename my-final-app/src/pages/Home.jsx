import { useState } from "react";

function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="container mt-4 text-center">
      <h1>Halfnote Healing</h1>
      <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>
        "Where your problems are solved and guided through music"
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
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

      <button
        className="btn btn-success btn-lg mt-4"
        onClick={() => setStarted(!started)}
      >
        Start Your Daily Activity
      </button>

      {started && (
        <p className="mt-3" style={{ fontWeight: "bold" }}>
          Let’s get started on today’s musical journey!
        </p>
      )}
    </div>
  );
}

export default Home;