import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-10">
      
      <h1 className="text-white text-4xl font-bold mb-2">
        Welcome to Halfnote Healing
      </h1>
      
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
      </div >

{}
      <PrimaryButton className="mt-20 "
       onClick={() => navigate("/log-mood")} >
        Start Your Daily Activity
      </PrimaryButton>

     </div>

  );
}

export default Home;