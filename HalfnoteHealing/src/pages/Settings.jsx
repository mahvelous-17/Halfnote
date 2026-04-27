import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import HoudiniTxt from "../components/HoudiniTxt";

function Settings() {


  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center pt-24 px-6">
        

        <HoudiniTxt>
          <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Settings</h1>
        </HoudiniTxt>
</div>
  );
}

export default Settings;