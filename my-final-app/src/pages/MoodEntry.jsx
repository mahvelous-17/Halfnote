import { useState } from "react";
import StreakCounter from "../components/StreakCounter";

function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7);

  const handleCheckMood = () => {
    if (!selectedMood) return alert("Please select a mood emoji first!");
    alert(`Mood logged: ${selectedMood}. Loading your activity...`);
  };

  const moods = [
    { emoji: "😔", label: "Low" },
    { emoji: "😐", label: "Meh" },
    { emoji: "🙂", label: "Steady" },
    { emoji: "😊", label: "Good" },
    { emoji: "✨", label: "Great" }
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center pt-24 px-6 bg-[#0c0c0c]">
      <StreakCounter days={streak} />

      <div className="w-full max-w-xl mt-6">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">How's the music feeling today?</h1>
        <p className="text-white/50 mb-10 text-sm">Pick the mood that matches right now</p>

        {/* Mood Buttons  */}
        <div className="flex justify-between items-end mb-12 px-4">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.emoji)}
              className={`emoji-btn ${selectedMood === m.emoji ? 'selected' : 'unselected'}`}
            >
              <span className="text-4xl">{m.emoji}</span>
              <p className="emoji-label" style={{ opacity: selectedMood === m.emoji ? 1 : 0 }}>
                {m.label}
              </p>
            </button>
          ))}
        </div>

        {/* Reflection Box */}
        <div className="mood-reflection-card">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
            Reflect <span className="normal-case">· optional</span>
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
          className="mt-10 w-full py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-500 text-xs tracking-[0.2em] uppercase"
        >
          Get Music Guided Activity
        </button>
      </div>
    </div>
  );
}

export default MoodEntry;