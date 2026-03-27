import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

function MusicAct() {
    const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto text-white flex flex-col items-center pt-24 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Music Act</h1>

   <PrimaryButton className="mt-20 "
       onClick={() => navigate("/Reflect")} >
        Done?
      </PrimaryButton>


    </div>
  );
}

export default MusicAct;