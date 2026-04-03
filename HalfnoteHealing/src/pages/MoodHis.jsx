import React, { useState } from "react";
import BarGraph from "../components/BarGraph";
import HoudiniTxt from "../components/HoudiniTxt";
import PrimaryButton from "../components/PrimaryButton";

const archiveData = {
  April: [
    { label: "Week 1", val: 4.5 },
    { label: "Week 2", val: 3.2 },
    { label: "Week 3", val: 4.8 },
    { label: "Week 4", val: 5.0 },
  ],
  March: [
    { label: "Week 1", val: 2.1 },
    { label: "Week 2", val: 4.0 },
    { label: "Week 3", val: 3.5 },
    { label: "Week 4", val: 4.2 },
  ]
};

function MoodHis() {
  const [selectedMonth, setSelectedMonth] = useState("April");

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-white pt-32 px-6 flex flex-col items-center">
      
      <HoudiniTxt>
        <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 mb-2">
          Mood Logs
        </h1>
      </HoudiniTxt>
      <h2 className="text-4xl font-bold tracking-tighter mb-12">History</h2>

      <div className="flex gap-4 mb-12">
        {["March", "April"].map((month) => (
          <PrimaryButton
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`transition-opacity duration-300 ${
              selectedMonth === month ? "text-white opacity-100" : "text-white/30 opacity-60"
            }`}
          >
            {month}
          </PrimaryButton>
        ))}
      </div>

      <div style={{ 
        height: '400px',
        width: '100%', 
        maxWidth: '700px', 
        backgroundColor: 'rgba(255, 255, 255, 0.03)', 
        borderRadius: '16px', 
        padding: '40px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 italic">
            {selectedMonth} | Mood Average
          </h3>
        </div>

        <BarGraph 
          data={archiveData[selectedMonth]} 
          chartHeight={280} 
          spacing={110}    
        />

      </div>
      
    </div>
  );
}

export default MoodHis;