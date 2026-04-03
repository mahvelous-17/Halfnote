import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar"; 
import HoudiniTxt from "../components/HoudiniTxt";

const musicTasks = [
  "Create a beat using only objects within reach",
  "Write a song about something thats bothering you",
  "Go on a streaming platform and look for a new artists you haven't heard before",
  "Practice singing or humming your favorite song",
  "Make a new playlist of songs that make you feel good, if you already have one look for more songs to add",
];

function MusicAct() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [activeTask, setActiveTask] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * musicTasks.length);
    setActiveTask(musicTasks[randomIndex]);
  }, []);

  const handleDone = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/reflect"); 
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center pt-24 px-6">
      <div className="w-full max-w-2xl flex flex-col items-center">
        

        <HoudiniTxt>
          <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Mood History</h1>
        </HoudiniTxt>
        
        <HoudiniTxt className="flex justify-center mb-6">
           <pre 
            className="houdini-gradient select-none pointer-events-none"
            style={{
              fontSize: "12px",     
              lineHeight: "14px",   
              textAlign: "center",
              whiteSpace: "pre",
              fontWeight: "bold",
              fontFamily: "monospace" 
            }}
          >
{`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢿⡀⠀⠀⠀⠀⣤⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣀⣸⠏⠘⣧⠀⠀⠀⠀⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢦⡀⠈⠀⠀⠙⢛⣿⡿⠂⠀⠀⠠⠄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠀⠀⠀⣰⡏⠀⣀⠀⢸⡏⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡶⠟⠙⢷⣄⣇⠀⠀⠰⣶⣿⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠈⠛⠀⠀⠚⠛⠿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠀⠀⠀⠀⢀⣿⠛⠛⠻⠿⣿⣿⣷⡄⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⢸⡏⠀⠀⠀⠀⠀⣼⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠁⠀⢀⣀⠀⢠⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⠿⠿⠿⣿⣶⣶⡆⠀⠘⠿⠿⠋⠀⠀⢻⣿⣿⣿⡏⠀⠀⠀⠘⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⢀⡄⠀⠀
⠀⠀⠀⠀⠀⣴⣶⣾⡏⠀⠀⠀⣀⡀⢠⡿⠀⠀⠀⠀⠀⢿⡲⠋⣇⣀⡀⠀⠸⡗⠋⣇⡀⠀
⠀⠀⠀⠀⠀⠻⣿⡿⠃⠀⠀⢺⣿⣿⣿⠃⠀⠀⡄⠀⢀⣜⣥⣄⡖⠋⠁⠀⠛⠒⣾⠉⠉⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠋⠁⠀⠀⢰⣿⡄⠀⠀⠀⠈⠛⠀⠀⡀⠀⠀⠈⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⢿⡄⠀⠀⠀⠀⠐⣶⣷⠤⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠘⠀⢀⣀⣠⣤⡤⠿⠀⠈⠿⠛⢛⣿⠟⠀⠁⠉⠀⠀⠀⠀⠀⠀
⠀⠈⠁⠀⠀⢦⣤⣿⣀⡀⠀⠀⠀⠉⠳⢦⣤⡀⠀⠀⠀⢰⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡀⡀⠀⠀⠀⣰⠿⢿⡏⠁⠀⢀⡀⠀⠀⠀⣸⠃⢀⣤⣄⡈⣷⡀⠀⠐⠓⠀⠀⠀⠀⠀⠀⠀
⠚⠏⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠁⠀⠀⠀⣿⡴⠛⠁⠉⠛⠾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`}
          </pre>
        </HoudiniTxt>

        <div 
          className="w-full flex flex-col items-center text-center"
          style={{ 
            padding: '20px 24px', 
            borderRadius: '16px' 
          }}
        >
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-6">
            Current Task
          </h3>
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-relaxed max-w-lg">
            {activeTask}
          </h2>
        </div>

        <div className=" w-full max-w-md h-24 flex items-center justify-center">
          {!isSubmitted ? (
            <PrimaryButton onClick={handleDone}>
              Task Complete
            </PrimaryButton>
          ) : (
            <Loadingbar message="Recording Progress..." />
          )}
        </div>
        
      </div>
    </div>
  );
}

export default MusicAct;