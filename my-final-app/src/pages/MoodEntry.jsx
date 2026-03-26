import { useState } from "react";
import StreakCounter from "../components/StreakCounter";
import MoodButton from "../components/MoodButton";

function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [streak] = useState(7); 

  const handleCheckMood = () => {
    if (selectedMood === "") {
      alert("Please select a mood emoji first!");
    } else {
      alert(`Mood logged: ${selectedMood}. Loading your activity...`);
    }
  };

  return (
    <div className="pt-10 min-h-screen text-white text-center">
      {/* The Streak Component */}
      <StreakCounter days={streak} />

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">How's the music feeling today?</h1>
        <p className="opacity-70 mb-8 text-white/80">Select your starting mood</p>

        {/*  Mood Buttons */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <MoodButton emoji="😔" label="Low" isSelected={selectedMood === "😔"} onSelect={setSelectedMood} />
          <MoodButton emoji="😐" label="Meh" isSelected={selectedMood === "😐"} onSelect={setSelectedMood} />
          <MoodButton emoji="🙂" label="Steady" isSelected={selectedMood === "🙂"} onSelect={setSelectedMood} />
          <MoodButton emoji="😊" label="Good" isSelected={selectedMood === "😊"} onSelect={setSelectedMood} />
          <MoodButton emoji="✨" label="Great" isSelected={selectedMood === "✨"} onSelect={setSelectedMood} />
        </div>

        {/* Reflection Box */}
        <div className="mt-10 p-6 border border-white/20 rounded-2xl text-left bg-black/10">
          <h3 className="text-lg font-semibold mb-2">Reflect (Optional)</h3>
          <textarea
            className="w-full p-4 bg-transparent border border-white/10 rounded-lg text-white outline-none focus:border-white transition-all"
            placeholder="What's on your mind?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          onClick={handleCheckMood}
          className="mt-10 px-8 py-3 border-2 border-white font-bold rounded-lg hover:bg-white hover:text-[#338ad1] transition-all cursor-pointer"
        >
          Get Music Guided Activity
        </button>
      </div>
    </div>
  );
}

export default MoodEntry;