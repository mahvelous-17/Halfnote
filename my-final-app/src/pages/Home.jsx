import { useState } from "react";

function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5 pt-32 pb-10">
      
      <h2 className="text-white text-4xl font-bold mb-2">
        Welcome to Halfnote Healing
      </h2>
      
      <p className="text-white/60 italic mb-10 text-lg">
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

{}
      <button
        onClick={() => setStarted(true)} 
        className="mt-10 px-10 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform duration-300 uppercase tracking-widest text-xs"
      >
        Start Your Daily Activity
      </button>

      {started && (
        <p className="mt-6 text-green-400 font-medium animate-pulse">
          ✨ Let’s get started on today’s musical journey!
        </p>
      )}
    </div>
  );
}

export default Home;