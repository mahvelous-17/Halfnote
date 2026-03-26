import { useState } from "react";
import MoodButton from "../components/MoodButton"; 
import StreakCounter from "../components/StreakCounter";

function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7);

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Meh" },
    { emoji: "🙂", label: "Steady" },
    { emoji: "😊", label: "Good" },
    { emoji: "✨", label: "Great" }
  ];

  const handleCheckMood = () => {
    if (!selectedMood) return alert("Please select a mood emoji first!");
    alert(`Mood logged: ${selectedMood}. Loading your activity...`);
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center pt-24 px-6 bg-[#0c0c0c]">
      <StreakCounter days={streak} />


      <div className="w-full max-w-md mt-6">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">How's the music feeling today?</h1>
        <p className="text-white/50 mb-10 text-sm">Pick the mood that matches right now</p>

         {/* Mood Buttons  */}
         <div className="bg-red-500 text-9xl font-black rotate-12 p-20 fixed top-0 left-0 z-[9999]">
  TAILWIND WORKS
</div>
        <div className="flex flex-row justify-between items-center mb-12 w-full">
          {moods.map((m) => (
            <MoodButton
              key={m.label}
              emoji={m.emoji}
              label={m.label}
              isSelected={selectedMood === m.emoji}
              onSelect={setSelectedMood}
            />
          ))}
        </div>

        {/* Reflection Box */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all hover:border-white/20">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
            Reflect <span className="normal-case opacity-50">· optional</span>
          </h3>
          <textarea
            rows={4}
            className="w-full bg-transparent text-white text-lg placeholder-white/10 outline-none resize-none"
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          onClick={handleCheckMood}
          className="mt-10 w-full py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all duration-300 text-[11px] tracking-[0.2em] uppercase"
        >
          Get Music Guided Activity
        </button>
      </div>
    </div>
  );
}

export default MoodEntry;