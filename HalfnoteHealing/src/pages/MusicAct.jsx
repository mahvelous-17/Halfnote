import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import Loadingbar from "../components/Loadingbar"; 

function MusicAct() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const navigate = useNavigate();

  const handleDone = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/Reflect");
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white flex flex-col items-center pt-24 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Music Act</h1>

      <div className="mt-20 w-full max-w-md h-24 flex items-center justify-center">
        {!isSubmitted ? (
          <PrimaryButton onClick={handleDone}>
            Done?
          </PrimaryButton>
        ) : (
          <Loadingbar message="Amazing Job!" />
        )}
      </div>
    </div>
  );
}

export default MusicAct;